import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { View, TextInput, Logo, Button, FormErrorMessage } from '../components';
import { Images, Colors, auth } from '../config';
import { useTogglePasswordVisibility } from '../hooks';
import { loginValidationSchema } from '../utils';

export const LoginScreen = ({ navigation }) => {
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
    backgroundColor: Colors.white,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.orange
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700'
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});