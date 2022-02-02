import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { api } from './services/api';
import useThemeStore from './store/theme/useTheme';

const App: React.FC = function () {
  const { currentTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const themeOfDevice = Appearance.getColorScheme();
    setTheme(themeOfDevice);

    const themeListener = Appearance.addChangeListener(theme => {
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
