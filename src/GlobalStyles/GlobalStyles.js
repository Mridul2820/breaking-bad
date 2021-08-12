import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
    }
    body {
        background: url("/assets/bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
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
        vertical-align: baseline;
        background: transparent;
    }
`

export default GlobalStyles