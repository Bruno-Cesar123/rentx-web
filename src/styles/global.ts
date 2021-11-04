import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: #FFFFFF;
    color: #404040;
    -webkit-font-smoothing: antialiased;
  }
`;