import 'react-native-gesture-handler';

import React from 'react';
import FlashMessage from 'react-native-flash-message';

import '#/configs/ReactotronConfig';

import App from './App';

const Index: React.FC = function () {
  return (
    <>
      <App />
      <FlashMessage position="top" />
    </>
  );
};

export default Index;
