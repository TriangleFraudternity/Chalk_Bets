//auth shits

//goes to login screen

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { loginScreen, signupScreen, forgorPasswordScreen } from '../pages/forgorPasswordScreen';


const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Login' component={loginScreen} />
      <Stack.Screen name='Signup' component={signupScreen} />
      <Stack.Screen name='ForgotPassword' component={forgorPasswordScreen} />
    </Stack.Navigator>
  );
};