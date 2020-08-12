import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';

import ModalContextProvider from './contexts/ModalContext'

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
