import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import useThemeStore from './store/theme/useTheme';

const App: React.FC = function () {
  const { currentTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const themeListener = Appearance.addChangeListener(theme => {
      console.tron.log('theme: ', theme);
      if (!theme.colorScheme) setTheme('light');
      setTheme(theme.colorScheme);
    });

    return () => themeListener.remove();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={currentTheme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
