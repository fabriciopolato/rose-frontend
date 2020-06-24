import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Button from './components/Button';

const App: React.FC = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </Fragment>
);

export default App;
