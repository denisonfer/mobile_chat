/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useCallback, useContext, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { light, dark } from '#/themes';

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const MyThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={isDark ? dark : light}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useMyTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { MyThemeProvider, useMyTheme };
