import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemCard from '../components/ItemCard'

const Characters = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters`)

            setItems(result.data)
            console.log(result.data)
        }

        fetchItems()
    }, [])

    return (
        <Container>
            <AllItem>
                {items?.map(item => (
                    <ItemCard key={item.char_id} item={item} />
                ))}
            </AllItem>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
