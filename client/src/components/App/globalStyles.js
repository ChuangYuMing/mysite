import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', 'system-ui', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.8;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #2d2d2d;
    font-weight: bold;
    margin: 0 0 1.375rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    margin-top: 3rem;
    font-size: 1.7rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1.75rem;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td {
    padding: 0;
  }

  input {
    border: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyle
