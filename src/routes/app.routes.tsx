import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '#/screens/App/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="DashboardScreen" component={DashboardScreen} />
    </Navigator>
  );
};

export default AppRoutes;
