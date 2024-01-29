import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar, StyleSheet } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import {auth} from './config/firebase.js';


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginClick = () => {
        // Implement your login logic here
        // For example, you can validate the email and password
        // and perform the login action accordingly
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {z
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    };

    //const auth = getAuth();
    


    return (
        <View style={styles.container}>
            <Text style={styles.bigBlueText}>Chalkbets</Text>
            <StatusBar style="auto" />

            <View style={styles.inputContainer}>
                <TextInput
                    value={email}
                    placeholder="Enter your email here"
                    onChangeText={text => setEmail(text)}
                    style={styles.inputBox}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    placeholder="Enter your password here"
                    onChangeText={text => setPassword(text)}
                    style={styles.inputBox}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.inputContainer}>
                <Button
                    title="Log in"
                    onPress={loginClick}
                    style={styles.inputButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigBlueText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    inputBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    errorLabel: {
        color: 'red',
        marginBottom: 5,
    },
    inputButton: {
        // Style for the login button
    },
});

export default LoginForm;
