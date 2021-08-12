import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Quotes = ({ author }) => {
    const [quotes, setQuotes] = useState()

    useEffect(() => {
        const fetchItems = async () => {
            const quoteResult = await axios(`https://www.breakingbadapi.com/api/quote?author=${author}`)
            setQuotes(quoteResult.data)
        }

        fetchItems()

         // eslint-disable-next-line
    }, [])

    return (
        <>
        {quotes?.length > 0 ? (
            <Container>
                <Title>All quotes by {author} </Title>
                <ul>
                    {quotes?.map(quote => (
                        <Quote key={quote.quote_id}>
                            &ldquo; {quote.quote} &rdquo;
                        </Quote>
                    ))}
                </ul>
            </Container>
        ) : ""}
        </>
    )
}

const Container = styled.div`
    
`

const Title = styled.h2`
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 5px;
    text-align: center;
    border-bottom: 1px solid #999;

    @media screen and (max-width: 500px) {
        font-size: 21px;
    }
`

const Quote = styled.li`
    margin: 14px 0;
    font-size: 21px;
    list-style: square;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`

export default Quotes
