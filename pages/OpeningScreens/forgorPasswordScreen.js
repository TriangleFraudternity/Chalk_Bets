// ForgorPasswordScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

import {auth} from "../../config/firebase.js";

const ForgorPasswordScreen = ({ navigation }) => {
    const [resetEmailStatus, setResetEmailStatus] = useState(0);
    const [email, setEmail] = useState("");
    const resetPasswordStatusMessages = ["nuffin yet","Email Sent","Email not Found"];

    const auth = getAuth();

    sendPasswordResetEmailFunction = () => {
        console.log("Reset Password");
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                setResetEmailStatus(1);
            })
            .catch((error) => {
                console.log("wtfbruh");
                setResetEmailStatus(2);
                const errorCode = error.code;
                const errorMessage = error.message;
        
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter your email"
                keyboardType="email-address"
            />
            <Button title="Send Recovery Email" onPress={sendPasswordResetEmailFunction} />
            <Text style={styles.outPut}>{resetPasswordStatusMessages[resetEmailStatus]}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    outPut: {
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default ForgorPasswordScreen;