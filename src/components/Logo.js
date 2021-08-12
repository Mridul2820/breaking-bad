import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
    return (
        <LogoWrap to="/">
            <img src="/assets/logo.png" alt="logo" />
        </LogoWrap>
    )
}

const LogoWrap = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    img {
        width: 120px;
    }
`

export default Logo
