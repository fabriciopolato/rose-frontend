import { createGlobalStyle } from 'styled-components';
import museoWoff2 from '../fonts/52be0694-00c1-4daa-8782-419021c48e95.woff2';
import museoWoff from '../fonts/dee84039-06ae-4a61-89c4-709e594804a3.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Museo';
    src: local('Museo'), local('FontName'),
    url(${museoWoff2}) format('woff2'),
    url(${museoWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  html, body {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 10px;
    font-family: 'Raleway', serif;
  }
  input{outline: none;}

  body {
    background: linear-gradient(180deg, #D1E8FD 0%, #B0C6D9 40.63%);
    font-size: 1.6rem;
<<<<<<< HEAD

=======
  }

  input {
    outline: transparent
  }

  figure {
    margin: 0;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
>>>>>>> 44916db0a93b87052368f7b1229eba63f1aed379
  }
`;
