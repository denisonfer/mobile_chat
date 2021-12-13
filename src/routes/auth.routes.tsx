import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '#/screens/Auth/Intro';
import SignInScreen from '#/screens/Auth/SignIn';
import SignUpScreen from '#/screens/Auth/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="introScreen" component={IntroScreen} />
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
    </Navigator>
  );
};

export default AuthRoutes;
