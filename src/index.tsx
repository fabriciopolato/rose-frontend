import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';

import ModalContextProvider from './contexts/ModalContext';
import ProfessionalContextProvider from './contexts/ProfessionalContext';
import UserContextProvider from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <UserContextProvider>
        <ProfessionalContextProvider>
          <App />
        </ProfessionalContextProvider>
      </UserContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
