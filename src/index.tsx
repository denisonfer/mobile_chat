import 'react-native-gesture-handler';

import React from 'react';
import FlashMessage from 'react-native-flash-message';

import '#/configs/ReactotronConfig';

import App from './App';
import { MyThemeProvider } from './contexts/Theme';

const Index: React.FC = function () {
  return (
    <MyThemeProvider>
      <App />
      <FlashMessage position="top" />
    </MyThemeProvider>
  );
};

export default Index;
