import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import useThemeStore from './store/theme/useTheme';

const App: React.FC = function () {
  const { currentTheme } = useThemeStore();

  return (
    <ThemeProvider theme={currentTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
