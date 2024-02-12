import {React, useState} from "react";

import styles from "../assets/styling.js";

import {NewBetButton, NewBetPage} from "./NewBetPopup.js";

import {
    Image,
    Modal,
    View,
    Button,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import GroupsScreen from "../pages/GroupsScreen.js";
import SettingsScreen from "../pages/SettingsScreen.js";
import LoginScreen from "../pages/LoginScreen.js";
import ForgorPasswordScreen from "../pages/ForgorPasswordScreen.js";
import SignUpScreen from "../pages/SignupScreen.js";
import HomeScreen from "../pages/HomeScreen.js";
import PaymentsScreen from "../pages/PaymentsScreen.js";

// Bottom Nav-Bar functionality
const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get("window").height;

function TabNavigation() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    return (
        <View style={{flex: 1}}>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={styles.tabBarStyle}
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: "transparent",
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Home Page",
                        tabBarLabel: "Home",
                        tabBarIcon: ({size, color}) => (
                            <MaterialCommunityIcons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Groups"
                    component={GroupsScreen}
                    options={{
                        title: "Groups Page",
                        tabBarIcon: ({size, color}) => (
                            <MaterialCommunityIcons
                                name="account-group"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="NewBetButton"
                    component={NewBetButton}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarButton: () => (
                            <NewBetButton onPress={handleOpenBottomSheet} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Payments"
                    component={PaymentsScreen}
                    options={{
                        title: "Payments Page",
                        tabBarIcon: ({size, color}) => (
                            <MaterialCommunityIcons
                                name="account-cash"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: "Settings",
                        tabBarIcon: ({size, color}) => (
                            <MaterialCommunityIcons
                                name="settings-helper"
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
            <NewBetPage
                isVisible={isBottomSheetOpen}
                onClose={handleCloseBottomSheet}
            />
        </View>
    );
}

export {TabNavigation};
