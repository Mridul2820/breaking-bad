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
        }

        fetchItems()
    }, [])

    return (
        <Container>
            {items?.map(item => (
                <ItemCard key={item.char_id} item={item} />
            ))}
        </Container>
    );
}

const Container = styled.div`

`

export default Characters
