import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.bigBlueText}>Chalkbets</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray', // Set the background color to gray
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBlueText: {
        fontSize: 40,
        color: 'lightgreen',
        fontWeight: 'bold',
    },
});
