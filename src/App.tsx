import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Button from './components/Button';
import Input from './components/Input';

const App: React.FC = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <h1>Hello Rose</h1>
      <Input type="email" placeholder="rose@mail.com" />
      <Button
        backgroundColor="black"
        textColor="white"
        backgroundColorOnHover="white"
        textColorOnHover="black"
      >
        Texto Qualquer
      </Button>

      <GlobalStyle />
    </ThemeProvider>
  </Fragment>
);

export default App;
