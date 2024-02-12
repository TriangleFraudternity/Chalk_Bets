// ForgorPasswordScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {validateEmail} from "../helpers/validationHelper.js";


import {auth} from "../config/firebase.js";

const ForgorPasswordScreen = ({ navigation }) => {
    const [resetEmailStatus, setResetEmailStatus] = useState(0);
    const [email, setEmail] = useState("");
    const resetPasswordStatusMessages = ["nuffin yet","Email Sent","Email not Found"];
    const [emailValidationMessage, setEmailValidationMessage] = useState("");


    const auth = getAuth();

  
    sendPasswordResetEmailFunction = () => {
        if (validateEmail(email)) {
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
        }
        else{
            setEmailValidationMessage("Not a valid email");
        }
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
            <Text style={styles.label}>{emailValidationMessage}</Text>
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
