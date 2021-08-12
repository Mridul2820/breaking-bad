import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Haeder = () => {
    return (
        <Wrap>
            <LogoWrap to="/">
                <img src="/assets/logo.png" alt="logo" />
            </LogoWrap>
            <Category>
                <LinkItem to="/">Breaking Bad</LinkItem>
                <LinkItem to="/better-call-saul">Better Call Saul</LinkItem>
            </Category>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        padding: 0 10px;
    }
`

const LogoWrap = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    img {
        width: 80px;
    }
`

const Category = styled.div`
    @media screen and (max-width: 500px) {
        margin-top: 30px;
    }
`


const LinkItem = styled(Link)`
    background-color: rgb(72, 127, 90);
    color: #fff;
    margin: 0 8px;
    padding: 8px 16px;
    border-radius: 5px;

    @media screen and (max-width: 400px) {
        margin: 0 4px;
        font-size: 14px;
        padding: 8px 12px;
        white-space: nowrap;
    }
`


export default Haeder
