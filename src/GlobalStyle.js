import { createGlobalStyle } from 'styled-components';
import { layout, colors } from './constants';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    outline: 0;
    margin: 0;
  }

  html, body, #root {

    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Raleway', sans-serif !important;
    font-size: ${layout.scale() * 16}px;
    color: ${colors.black()};
    font-style: normal;
  }
`;
