import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemCard from '../components/ItemCard'
import Pagination from '../components/Pagination'
import { FaSearch } from 'react-icons/fa'

const Characters = () => {
    const [items, setItems] = useState([])

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
            const totalResult = await axios(`https://www.breakingbadapi.com/api/characters`)
            setNumOfPages(totalResult.data.length)
        }

        fetchItems()
    }, [])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?limit=${cardsPerPage}&offset=${indexOfFirstCard}`)

            setItems(result.data)
        }

        fetchItems()
    }, [indexOfFirstCard, cardsPerPage])

    const handleSearch = (e) => {
        e.preventDefault()

        
    }

    return (
        <Container>
            <Search onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search characters"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />
                <button type="submit">
                    <FaSearch size="20px" />
                </button>
            </Search>
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

const Search = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    input {
        display: block;
        padding: 10px;
        font-size: 20px;
        border: 0;
        border-radius: 5px;
        margin: auto;
        outline: none;
    }

    button {
        background: #487f5a;
        color: #fff;
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;
    }
`


export default Characters
