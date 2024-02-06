import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useState } from 'react';
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import GroupsScreen from '../pages/GroupsScreen.js';
import SettingsScreen from '../pages/SettingsScreen.js';
import LoginScreen from '../pages/LoginScreen.js';
import ForgorPasswordScreen from '../pages/ForgorPasswordScreen.js';
import SignUpScreen from '../pages/SignupScreen.js';
import HomeScreen from '../pages/HomeScreen.js';
import PaymentsScreen from '../pages/PaymentsScreen.js';

import styles from '../assets/styling.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get('window').height;

function LandingPage() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={styles.tabBarStyle}
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home Page',
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Groups"
                    component={GroupsScreen}
                    options={{
                        title: 'Groups Page',
                        tabBarIcon: ({ size, color }) => (
                            <MaterialCommunityIcons name="account-group" size={size} color={color} />
                        ),
                    }}
                />
                {/* Custom Button */}
                <Tab.Screen
                    name="Custom"
                    component={CustomButton}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            // Prevent default action
                            e.preventDefault();
                            // Navigate to the desired screen
                            navigation.navigate('SettingsScreen');
                        },
                    })}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarButton: () => (
                            <CustomButton onPress={handleOpenBottomSheet} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Payments"
                    component={PaymentsScreen}
                    options={{ title: 'Payments Page' ,
                        tabBarIcon:({size,color})=>(
                            <MaterialCommunityIcons name="account-cash" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: 'Settings' ,
                        tabBarIcon:({size,color})=>(
                            <MaterialCommunityIcons name="settings-helper" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>  
            {/* Modal for bottom sheet */}
            <CustomModal isVisible={isBottomSheetOpen} onClose={handleCloseBottomSheet}/>
        </View>
    );
}

// Custom Button Component
function CustomButton({ onPress }) {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 0,
                left: '50%', // Set the left position to 50% of the container
                marginLeft: -32, // Adjust the marginLeft to half of the button width
                zIndex: 10, // Set a higher z-index to ensure the button appears above the tab bar
                height: 64,
                width: 64,
                borderRadius: 64,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <MaterialCommunityIcons name="plus-circle" color="#886300" size={64} />
        </TouchableOpacity>
    );
}

// Custom Modal Component
function CustomModal({ isVisible, onClose }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Modal Title</Text>
                    <TouchableOpacity onPress={onClose}>
                        <MaterialCommunityIcons name="close" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <Text>BBIG RED DOG</Text>
                    <Image source={require('../assets/icons/close.png')} style={{ flex: 1, resizeMode: 'cover' }} />
                </View>
            </View>
        </Modal>
    );
}


function Navigation(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#00FFC2'}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                    <Stack.Screen name="ForgorPasswordScreen" component={ForgorPasswordScreen}/>
                    <Stack.Screen name="LandingPage" component={LandingPage}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
export default Navigation