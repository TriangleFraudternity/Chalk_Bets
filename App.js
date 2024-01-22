import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar, StyleSheet } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import db from '@react-native-firebase/database'
import 'expo-dev-client';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginClick = () => {
        // Implement your login logic here
        // For example, you can validate the email and password
        // and perform the login action accordingly
    };

    const createuser = async (response) => {
        db().ref('/users/${response.user.id}').set({email})

    };
    const createAccountClick = async () => {
        if (email && password){
            try {
                const response = await auth().createUserWithEmailAndPassword(email, password);
                if (response.user) {
                    await createProfile(response);

                }
            }
        
            catch (e){
                Alert.alert("bruh?!");
            }
        }
        // Implement your login logic here
        // For example, you can validate the email and password
        // and perform the login action accordingly
    };

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

            <View style={styles.inputContainer}>
                <Button
                    title="Create Account"
                    onPress={createAccountClick}
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
