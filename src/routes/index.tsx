import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuthStore } from '#/store/auth/useAuthStore';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = function () {
  const { token, isSigned } = useAuthStore();

  return (
    <NavigationContainer>
      {token && isSigned ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
