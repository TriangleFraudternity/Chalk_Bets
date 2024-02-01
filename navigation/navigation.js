import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GroupsScreen from '../pages/GroupsScreen.js'
import SettingsScreen from '../pages/SettingsScreen.js'
import LoginScreen from '../pages/LoginScreen.js'
import HomeScreen from '../pages/HomeScreen.js'
import PaymentsScreen from '../pages/PaymentsScreen.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LandingPage() {
    return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Tab.Screen
            name = "Home"
            component = {HomeScreen}
            options = {{title: 'Home Page' ,
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="home"
                    size={size} color={color}/>
            )
        }}
     />
    <Tab.Screen
        name = "Groups"
        component = {GroupsScreen}
        options = {{title: 'Groups Page' ,
            tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons name="account-group"
                size={size} color={color}/>
            )
        }}
    />
    <Tab.Screen
        name = "Payments"
        component = {PaymentsScreen}
        options = {{title: 'Payments Page' ,
            tabBarIcon:({size,color})=>(
                <MaterialCommunityIcons name="account-cash"
                size={size} color={color}/>
            )
        }}
    />
    <Tab.Screen
            name = "Settings"
            component = {SettingsScreen}
            options = {{title: 'Settings' ,
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="settings-helper"
                    size={size} color={color}/>
            )
        }}
    />
    </Tab.Navigator>
    );
}

function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions = {{headShown: false}}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="LandingPage" component={LandingPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation