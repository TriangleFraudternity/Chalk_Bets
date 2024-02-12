// Basic React Components
import { View } from 'react-native';
import { React, useState } from 'react';

// Navigation Components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Components
import { NewBetButton, NewBetPage } from './NewBetPopup.js'
import { TabNavigation } from './TabNavigation.js'
import { SettingsScreen }from '../pages/SettingsScreen.js';
import { LoginScreen } from '../pages/LoginScreen.js';
import { ForgorPasswordScreen } from '../pages/ForgorPasswordScreen.js';
import { SignUpScreen } from '../pages/SignupScreen.js';
import styles from '../assets/styling.js'

//Create Navigation
const Stack = createNativeStackNavigator();
function Navigation(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#00FFC2'}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                    <Stack.Screen name="ForgorPasswordScreen" component={ForgorPasswordScreen}/>
                    <Stack.Screen name="TabNavigation" component={TabNavigation}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
export default Navigation