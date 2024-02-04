import React from 'react';

// Import relative React Native Components
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import the nav-bar pages
import GroupsScreen from '../pages/Groups/GroupsScreen.js';
import SettingsScreen from '../pages/Settings/SettingsScreen.js';
import HomeScreen from '../pages/OpeningScreens/HomeScreen.js';
import PaymentsScreen from '../pages/Payments/PaymentsScreen.js';

// Create bottom tab NavBar
const Tab = createBottomTabNavigator();

// Bottom Nav-Bar functionality
function TabNavigation() {
    return (
    <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: 'transparent'
            },
        }}
    >
        <Tab.Screen
            name = "Home"
            component = {HomeScreen}
            options = {{
                title: 'Home Page',
                tabBarLabel: 'Home',
                tabBarIcon:({size,color}) => (
                    <MaterialCommunityIcons name="home"
                    size={size} color={color}/>
                ),
                tabBarActiveTintColor: '#ff5722',
                tabBarActiveBackgroundColor: '#990033',
                tabBarInactiveBackgroundColor: '#999999',
                tabBarInactiveTintColor: '#FFFFFF'
            }}
        />
        <Tab.Screen
            name = "Groups"
            component = {GroupsScreen}
            options = {{
                title: 'Groups Page',
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="account-group"
                    size={size} color={color}/>
                ),
                tabBarActiveTintColor: '#ff5722',
                tabBarActiveBackgroundColor: '#990033',
                tabBarInactiveBackgroundColor: '#999999',
                tabBarInactiveTintColor: '#FFFFFF'
            }}
        />
        <Tab.Screen 
            name="Custom" 
            component={SettingsScreen} 
            options={{
                title: 'Settings',
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                <View
                    style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 64,
                    width: 64,
                    borderRadius: 64,
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
                    >
                    <MaterialCommunityIcons name="plus-circle" color={color} size={64} />
                </View>
                ),
                tabBarActiveTintColor: '#ff5722'
            }}  
        />
        <Tab.Screen
            name = "Payments"
            component = {PaymentsScreen}
            options = {{title: 'Payments Page' ,
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="account-cash"
                    size={size} color={color}/>
                ),
                tabBarActiveTintColor: '#ff5722',
                tabBarActiveBackgroundColor: '#990033',
                tabBarInactiveBackgroundColor: '#999999',
                tabBarInactiveTintColor: '#FFFFFF'
            }}
        />
        <Tab.Screen
                name = "Settings"
                component = {SettingsScreen}
                options = {{title: 'Settings' ,
                    tabBarIcon:({size,color})=>(
                        <MaterialCommunityIcons name="settings-helper"
                        size={size} color={color}/>
                ),
                tabBarActiveTintColor: '#ff5722',
                tabBarActiveBackgroundColor: '#990033',
                tabBarInactiveBackgroundColor: '#999999',
                tabBarInactiveTintColor: '#FFFFFF'
            }}
        />
    </Tab.Navigator>    
    );
}
export default TabNavigation;
