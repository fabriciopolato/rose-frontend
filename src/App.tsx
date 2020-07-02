import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Routes from './routes/Routes';

const App: React.FC = () => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </Fragment>
);

export default App;
