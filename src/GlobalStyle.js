import { createGlobalStyle } from 'styled-components';
import { layout } from './constants';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${layout.scale() * 16}px;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
`;
