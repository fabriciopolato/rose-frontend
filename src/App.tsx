import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Button from './components/Button';

const App: React.FC = () => (
  <Fragment>
    <h1>Hello Rose</h1>
    <Button
      backgroundColor="black"
      textColor="white"
      backgroundColorOnHover="white"
      textColorOnHover="black"
    >
      Texto Qualquer
    </Button>

    <GlobalStyle />
  </Fragment>
);

export default App;
