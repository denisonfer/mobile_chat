import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuthStore } from '#/store/auth/useAuthStore';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { navigationRef } from './rootNavigation';

const Routes = () => {
  const { token, isSigned } = useAuthStore();

  return (
    <NavigationContainer ref={navigationRef}>
      {token && isSigned ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
