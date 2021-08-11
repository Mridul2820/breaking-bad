import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }
    body {
        background-color: #fafafa;
    }
    
    a {
        text-decoration: none;
        color: unset;
    }
    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    html,
    i,
    img,
    label,
    li,
    nav,
    p,
    small,
    span,
    ul {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }
`

export const Button = styled.button`
    margin: 8px 40px;
    border: 1px solid transparent;
    background-color: #0095f6;
    color: #fff;
    border-radius: 4px;
    padding: 5px 9px;
    cursor: pointer;
    
    &:disabled {
        background-color: rgba(0,149,246,.3);
    }
`

export default GlobalStyles