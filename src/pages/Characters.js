import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemCard from '../components/ItemCard'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'

const Characters = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [ currentPage, setCurrentPage ] = useState(1)
	const [ cardsPerPage ] = useState(10)
    const [ numOfPages, setNumOfPages ] = useState()

    const [text, setText] = useState('');

	// Get current posts
	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const fetchItems = async () => {
            const totalResult = await axios(`https://www.breakingbadapi.com/api/characters?name=${text}`)
            setNumOfPages(totalResult.data.length)
        }

        fetchItems()
    }, [text])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?limit=${cardsPerPage}&offset=${indexOfFirstCard}&name=${text}`)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [indexOfFirstCard, cardsPerPage, text])

    if(isLoading) return <Loading />

    return (
        <Container>
            <Header>
                <Search>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search characters"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                            setCurrentPage(1)
                        }}
                        autoFocus
                    />
                </Search>
            </Header>

            <AllItem>
                {items?.map(item => (
                    <ItemCard key={item.char_id} item={item} />
                ))}
            </AllItem>

            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
				cardsPerPage={cardsPerPage} 
				numOfPages={numOfPages}
				paginate={paginate} 
			/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px 40px 20px;
    margin: 0 auto;
    max-width: 1200px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px;
`

const Search = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 400px;
    width: 100%;

    input {
        display: block;
        padding: 10px;
        font-size: 20px;
        border: 0;
        border-radius: 5px;
        margin: auto;
        outline: none;
        width: 100%;
    }
`

const AllItem = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default Characters
