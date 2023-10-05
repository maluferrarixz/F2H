import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;

    }

    *, button, input{
        border: 0;
        background: none;
    }

    a{
        text-decoration: none;
    }

    ul, li{
        list-style: none;
    }
`
export default GlobalStyle