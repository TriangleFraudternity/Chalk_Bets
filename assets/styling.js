import React from "react";
import {StyleSheet, Text, View} from "react-native";

//Primary (Bright) Red: '#990033'
//Secondary (Dull) Red: '#400002'
//Chalk White:          '#FFFEF9'
//Chalkboard Gray:      '#292929'
//Rustic Gold:          '#886300'

const styles = StyleSheet.create({
    tabBarStyle: {
        activeTintColor: "#990033",
        activeBackgroundColor: "#292929",
        inactiveBackgroundColor: "#292929",
        inactiveTintColor: "#FFFFFF"
    },
    Tab: {
        tabBarActiveTintColor: "#400002",
        tabBarActiveBackgroundColor: "#292929",
        tabBarInactiveBackgroundColor: "#292929",
        tabBarInactiveTintColor: "#FFFFFF"
    },
});

export { styles as default };