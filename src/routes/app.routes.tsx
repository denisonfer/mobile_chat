/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomFabBar } from 'rn-wave-bottom-bar';
import { useTheme } from 'styled-components';

import { CreateGroupScreen } from '#/screens/App/CreateGroup';
import { DashboardScreen } from '#/screens/App/Dashboard';
import { GiftsScreen } from '#/screens/App/Gifts';
import { GroupScreen } from '#/screens/App/Group';
import { OptionsScreen } from '#/screens/App/Options';
import { ProfileScreen } from '#/screens/App/Profile';

const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator: StackNavigator, Screen: ScreenNavigator } =
  createNativeStackNavigator();

const BottomTabsScreens = () => {
  const { colors } = useTheme();

  const tabBarIcon =
    (name: string) =>
    ({ focused }: { focused: boolean }) =>
      <Icon name={name} size={28} color="white" />;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarActiveBackgroundColor: colors.PRIMARY,
      }}
      tabBar={props => (
        <BottomFabBar
          {...props}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )}
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: tabBarIcon('user'),
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

const GroupStackScreens = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ScreenNavigator name="GroupScreen" component={GroupScreen} />
    </StackNavigator>
  );
};

const AppRoutes = function () {
  return (
    <StackNavigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ScreenNavigator name="BottomTabsScreens" component={BottomTabsScreens} />
      <ScreenNavigator name="GroupStackScreen" component={GroupStackScreens} />
      <ScreenNavigator name="CreateGroupScreen" component={CreateGroupScreen} />
    </StackNavigator>
  );
};

export default AppRoutes;
