import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0; 
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    background: #DADADA;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased; 
  }
  html, body, #root{
    height: 100%;
  }
`;