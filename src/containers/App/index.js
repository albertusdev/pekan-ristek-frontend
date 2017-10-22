import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import theme from '../../common/theme';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {routes}
    </ThemeProvider>
  );
}

export default App;
