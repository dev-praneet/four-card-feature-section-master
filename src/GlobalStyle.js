import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    // background-color: blue;
}

:root {

}

body {
    font-family: 'Poppins', sans-serif;
}

h1 {
    font-weight: 600;
    font-size: 1.8em;
    line-height: 1.3;
    text-align: center;
}

`;