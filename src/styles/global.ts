import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']}; 
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
