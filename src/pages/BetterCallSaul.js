import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ItemCard from '../components/ItemCard'
import Loading from '../components/Loading'
import { AllItem, Container } from '../GlobalStyles/GlobalStyles'

const BetterCallSaul = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul`)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [])

    if(isLoading) return <Loading />

    return (
        <Container>
            <Title>Better Call Saul</Title>
            <AllItem>
                {items?.map(item => (
                    <ItemCard key={item.char_id} item={item} />
                ))}
            </AllItem>
        </Container>
    )
}


const Title = styled.h1`
    color: #fff;
    margin: 20px 0;
`

export default BetterCallSaul
