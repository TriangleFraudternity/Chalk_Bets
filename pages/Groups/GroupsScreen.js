// Import necessary React and React Native components
import { React, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

import { NewGroupPopup } from "./NewGroupPopup.js"; 
import { NewBetButton } from "../../navigation/NewBetPopup.js";

import { Ionicons } from "@expo/vector-icons";

import { getAuth, onAuthStateChanged } from "firebase/auth";

// Create a functional component for the page
const GroupsScreen = () => {

    const [isNewGroupSheetOpen, setIsNewGroupSheetOpen] = useState(false);

    const handleOpenNewGroupSheet = () => {
        setIsNewGroupSheetOpen(true);
    };

    const handleCloseNewGroupSheet = () => {
        setIsNewGroupSheetOpen(false);
    };

    return (
    // Use the View component as a container
        <View style={{flex: 1}}>
            <Header handleOpenNewGroupSheet={handleOpenNewGroupSheet}/>
            <NewGroupPopup
                isVisible={isNewGroupSheetOpen}
                onClose={handleCloseNewGroupSheet}
            />
        </View>
    );
};

const CreateNewGroupButton = ({ handleOpenNewGroupSheet }) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOpenNewGroupSheet}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create new Group</Text>
                <View style={styles.iconContainer}>
                    <Ionicons name="add-circle" size={18} color="black"/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Header = ({handleOpenNewGroupSheet}) => {

    const auth = getAuth();
    console.log(auth);
    const [currentUser, setCurrentUser ] = useState();
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
            setCurrentUser(user.name + "'s Groups");
            console.log("Success");
        } else {
            console.log("Fail");
        }
    });
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{currentUser}</Text>
            <CreateNewGroupButton handleOpenNewGroupSheet = {handleOpenNewGroupSheet} />
        </View>
    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333", // Header color
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    headerText: {
        color: "#fff", // Text color
        fontSize: 24,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#523b00", // Darker color for the container
        borderRadius: 20, // Adjust the borderRadius to get a cylinder-esque shape
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "#fff", // Text color
        fontSize: 16,
        marginRight: 10,
    },
    iconContainer: {
        backgroundColor: "#886300", // Button color
        borderRadius: 18, // Adjust the borderRadius to get a circle
        padding: 5,
    },
});

// Export the component for use in other parts of the application
export default GroupsScreen;
