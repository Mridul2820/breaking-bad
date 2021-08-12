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

    console.log(quotes);

    return (
        <>
        {quotes?.length > 0 ? (
            <Container>
                <Title>All quotes by {author} </Title>
                {quotes?.map(quote => (
                    <Quote key={quote.quote_id}>
                        &ldquo; {quote.quote} &rdquo;
                    </Quote>
                ))}

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
`

const Quote = styled.h3`
    margin: 14px 0;
    font-size: 21px;
`

export default Quotes
