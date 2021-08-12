import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
    return (
        <Warp>
            <img src="/assets/logo.png" alt="loading" />
            <h1>Loading...</h1>
        </Warp>
    )
}

const breatheAnimation = keyframes`
	0% { opacity: .2; }
	100% { opacity: 1; }
`

const Warp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    min-height: 90vh;

    img {
        width: 200px;
        margin-bottom: 30px;
        animation: ${breatheAnimation} 1s linear infinite;
    }

    h1 {
        color: #fff;
    }
`

export default Loading
