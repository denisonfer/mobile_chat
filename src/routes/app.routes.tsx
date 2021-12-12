import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GroupsScreen from '#/screens/App/Groups';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="GroupsScreen" component={GroupsScreen} />
    </Navigator>
  );
};

export default AppRoutes;
