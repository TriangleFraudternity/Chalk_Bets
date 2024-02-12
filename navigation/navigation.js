import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../assets/styling.js";

import { View } from "react-native";
import GroupsScreen from "../pages/GroupsScreen.js";
import SettingsScreen from "../pages/SettingsScreen.js";
import LoginScreen from "../pages/LoginScreen.js";
import ForgorPasswordScreen from "../pages/ForgorPasswordScreen.js";
import SignUpScreen from "../pages/SignupScreen.js";
import HomeScreen from "../pages/HomeScreen.js";
import PaymentsScreen from "../pages/PaymentsScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LandingPage() {
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            tabBarOptions = {styles.tabBarStyle}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent"
                },
            }}
        >
            <Tab.Screen
                name = "Home"
                component = {HomeScreen}
                options = {{
                    title: "Home Page",
                    tabBarLabel: "Home",
                    tabBarIcon:({size,color}) => (
                        <MaterialCommunityIcons name="home"
                            size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                style = {styles.Tab}
                name = "Groups"
                component = {GroupsScreen}
                options = {{
                    title: "Groups Page",
                    tabBarIcon:({size,color})=>(
                        <MaterialCommunityIcons name="account-group"
                            size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Custom" 
                component={SettingsScreen} 
                options={{
                    title: "Settings",
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <View
                            style={{
                                position: "absolute",
                                bottom: 0,
                                height: 64,
                                width: 64,
                                borderRadius: 64,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <MaterialCommunityIcons name="plus-circle" color={color} size={64} />
                        </View>
                    ),
                }}  
            />
            <Tab.Screen
                name = "Payments"
                component = {PaymentsScreen}
                options = {{title: "Payments Page" ,
                    tabBarIcon:({size,color})=>(
                        <MaterialCommunityIcons name="account-cash"
                            size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name = "Settings"
                component = {SettingsScreen}
                options = {{title: "Settings" ,
                    tabBarIcon:({size,color})=>(
                        <MaterialCommunityIcons name="settings-helper"
                            size={size} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>    
    );
}

function Navigation(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#00FFC2"}}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions = {{headerShown: true}}
                >
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                    <Stack.Screen name="ForgorPasswordScreen" component={ForgorPasswordScreen}/>
                    <Stack.Screen name="LandingPage" component={LandingPage}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
export default Navigation;