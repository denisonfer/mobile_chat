/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomFabBar } from 'rn-wave-bottom-bar';
import { useTheme } from 'styled-components';

import { CreateGroupScreen } from '#/screens/App/CreateGroup';
import { DashboardScreen } from '#/screens/App/Dashboard';
import { GiftsScreen } from '#/screens/App/Gifts';
import { OptionsScreen } from '#/screens/App/Options';

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = function () {
  const { colors } = useTheme();

  const tabBarIcon =
    (name: string) =>
    ({ focused }: { focused: boolean }) =>
      <Icon name={name} size={28} color="white" />;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarActiveBackgroundColor: colors.PRIMARY,
      }}
      tabBar={props => <BottomFabBar {...props} />}
    >
      <Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: tabBarIcon('home'),
        }}
      />

      <Screen
        name="GiftsScreen"
        component={GiftsScreen}
        options={{
          tabBarIcon: tabBarIcon('gift'),
        }}
      />

      <Screen
        name="CreateGroupScreen"
        component={CreateGroupScreen}
        options={{
          tabBarIcon: tabBarIcon('plus-square'),
        }}
      />

      <Screen
        name="OptionsScreen"
        component={OptionsScreen}
        options={{
          tabBarIcon: tabBarIcon('settings'),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
