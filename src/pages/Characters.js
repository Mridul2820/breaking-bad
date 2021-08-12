import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemCard from '../components/ItemCard'
import Pagination from '../components/Pagination'

const Characters = () => {
    const [items, setItems] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1)
	const [ cardsPerPage ] = useState(10)
    const [ numOfPages, setNumOfPages ] = useState()

	// Get current posts
	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const fetchItems = async () => {
            const totalResult = await axios(`https://www.breakingbadapi.com/api/characters`)
            setNumOfPages(totalResult.data.length)

            const result = await axios(`https://www.breakingbadapi.com/api/characters?limit=${cardsPerPage}&offset=${indexOfFirstCard}`)

            setItems(result.data)
        }

        fetchItems()
    }, [indexOfFirstCard, cardsPerPage])

    return (
        <Container>
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
    padding: 40px 20px;
    margin: 0 auto;
    max-width: 1200px;
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
