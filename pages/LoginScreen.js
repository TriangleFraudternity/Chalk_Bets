// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../config/firebase.js';
import {validateEmail,validatePassword} from '../helpers/validationHelper.js';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMessages = 'Wrong credentials entered';
  const [displayLoginMessage, setDisplayLoginMessage] = useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const auth = getAuth();



  const handleLogin = () => {

    // For simplicity, let's just log the email and password for now
    console.log('Email:', email);
    console.log('Password:', password);
    if (validateEmail(email) && validatePassword(password)) {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigation.navigate('TabNavigation');
          })
          .catch((error) => {
            setDisplayLoginMessage(true);
            const errorCode = error.code;
            const errorMessage = error.message;
      });
    }
    else{
      if (!validateEmail(email)){
        setEmailValidationMessage('Not a valid email');
      }
      if (!validatePassword(password)){
        setPasswordValidationMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
      }
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

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text style={styles.label}>{passwordValidationMessage}</Text>

      <Text style={styles.label}>{displayLoginMessage ? loginMessages : "chill in "} </Text>

      <Button title="Login" onPress={() => handleLogin()}/>
      
      <Text style={styles.signupText}>
        <Text style={styles.signupLink} onPress={() => navigation.navigate('ForgorPasswordScreen')}>
        Forgor Password?
        </Text>
      </Text>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUpScreen')}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
