import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';

import ModalContextProvider from './contexts/ModalContext'
import ProfessionalContextProvider from './contexts/ProfessionalContext'

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
    <ProfessionalContextProvider>
        <App />
    </ProfessionalContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
