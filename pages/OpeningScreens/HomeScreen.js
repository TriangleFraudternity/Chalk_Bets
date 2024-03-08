// Import necessary React and React Native components
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";



// Create a functional component for the page
const HomeScreen = () => {
    const auth = getAuth();
    const [currentUser,setCurrentUser] = useState();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            setCurrentUser(user.email);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return (
    // Use the View component as a container
        <View style={styles.container}>
            {/* Display a text element */}
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{currentUser}</Text>
        </View>
    );
};

// Create a stylesheet for styling the components
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8FFF5",
        flex: 1, // Flex property allows the container to expand to fill the available space
        justifyContent: "center", // Align content vertically at the center
        alignItems: "center", // Align content horizontally at the center
    },
    text: {
        fontSize: 20, // Set font size to 20
        fontWeight: "bold", // Set font weight to bold
    },
});

// Export the component for use in other parts of the application
export default HomeScreen;
