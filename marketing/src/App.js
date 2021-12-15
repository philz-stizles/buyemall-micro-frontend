import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import theme from './theme';

// call this function at the root of the application and before any MUI components import
ClassNameGenerator.configure(componentName => {
  componentName.replace('Mui', '');

  return `ma-${componentName}`;
});

const App = ({ history }) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
