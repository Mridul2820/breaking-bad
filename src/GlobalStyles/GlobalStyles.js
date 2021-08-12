import styled, { createGlobalStyle } from 'styled-components';

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

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px 40px 20px;
    margin: 0 auto;
    max-width: 1200px;
`

export const AllItem = styled.div`
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

export default GlobalStyles