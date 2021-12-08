import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '#/screens/Auth/Intro';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="introScreen" component={IntroScreen} />
    </Navigator>
  );
};

export default AuthRoutes;
