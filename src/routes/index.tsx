import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import App from '#/App';

const Routes: React.FC = function () {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Routes;
