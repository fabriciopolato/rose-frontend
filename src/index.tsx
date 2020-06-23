import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  salmon: '#F2D9D0',
  orange: '#F2BC8D',
  black: '#384001',
  white: '#FAFBFC',
  lightSteelBlue: '#B0C6D9',
  cornFlowerBlue: '#54AFDC',
  red: '#D94A64',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
