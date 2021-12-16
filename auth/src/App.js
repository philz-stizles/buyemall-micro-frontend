import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import theme from './theme';

// call this function at the root of the application and before any MUI components import
ClassNameGenerator.configure(componentName => {
  componentName.replace('Mui', '');

  return `au-${componentName}`;
});

const App = ({ history, onSignIn }) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Switch>
          <Route path="/auth/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
