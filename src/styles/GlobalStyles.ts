import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    #root {
    width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
