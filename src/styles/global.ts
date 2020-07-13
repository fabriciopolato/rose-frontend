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

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html, body, #root {
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 10px;
    font-family: 'Raleway', serif;
  }

  body {
    background: linear-gradient(180deg, #D1E8FD 0%, #B0C6D9 40.63%);

    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: #90A4AE #CFD8DC;
  }

  body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  body::-webkit-scrollbar-track {
    background: #CFD8DC
  }

  body::-webkit-scrollbar-thumb {
    background-color: #90A4AE  ;
    border-radius: 12px;
    border: 4px solid #CFD8DC
  }

  body, input, button {
    font: 1.6rem 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
