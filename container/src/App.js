import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/utils';
import MarketingUI from './components/MarketingUI';
import theme from './theme';

// call this function at the root of the application and before any MUI components import
ClassNameGenerator.configure(componentName => {
  componentName.replace('Mui', '');

  return `co-${componentName}`;
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <h1>Hi there</h1>
          <MarketingUI />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
