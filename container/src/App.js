import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import theme from './theme';
import Loader from './components/Loader';
import Header from './components/Header';

const MarketUILazy = lazy(() => import('./components/MarketingUI'));
const AuthUILazy = lazy(() => import('./components/AuthUI'));
const DashboardUILazy = lazy(() => import('./components/DashboardUI'));

// call this function at the root of the application and before any MUI components import
ClassNameGenerator.configure(componentName => {
  componentName.replace('Mui', '');

  return `co-${componentName}`;
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/auth">
                <AuthUILazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardUILazy />
              </Route>
              <Route path="/" component={MarketUILazy} />
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
