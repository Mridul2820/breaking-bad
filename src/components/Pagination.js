import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Pagination = ({ currentPage, setCurrentPage, cardsPerPage, numOfPages, paginate }) => {

    const pageNumbers = []
    const totalPages =  Math.ceil(numOfPages / cardsPerPage)

    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const pageChange = (num) => {
        paginate(num)
        window.scroll(0, 0)
    }

    const handleNextbtn  = () => {
        setCurrentPage(currentPage + 1)
        window.scroll(0, 0)
    }

    const handlePrevbtn  = () => {
        setCurrentPage(currentPage - 1)
        window.scroll(0, 0)
    }

    console.log(currentPage);

    return (
        <Container>
            <ul>
                {currentPage > 1 && 
                    <Arrow onClick={handlePrevbtn}>
                        <AiOutlineLeft />
                    </Arrow>
                }
                {pageNumbers.map(number => (
                    <Number
                        key={number}
                        onClick={() => pageChange(number)}
                        className={currentPage === number ? "active" : null}
                    >
                        {number}
                    </Number>
                ))}
                {currentPage < totalPages && 
                    <Arrow onClick={handleNextbtn}>
                        <AiOutlineRight />
                    </Arrow>
                }
            </ul>
        </Container>
    )
}




const Container  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    ul {
        display: flex;
        list-style: none;
    }
`

const Number = styled.li`
    padding: 5px;
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);

    &.active {
        background: #ffffff;
    }
`

const Arrow = styled(Number)`
    background: #487f5a;
    color: #fff;
`

export default Pagination
