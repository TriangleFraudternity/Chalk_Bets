// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/loginScreen';
import SignUpScreen from './pages/signupScreen';
import HomeScreen from './pages/homeScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Create Profile' }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'HomeScreen' }}/>
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
