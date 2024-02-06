// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../config/firebase.js';
import {validateEmail,validatePassword} from '../helpers/validationHelper.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/authStyles.js';

import PasswordInputText from 'react-native-hide-show-password-input';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMessages = 'Wrong credentials entered';
  const [displayLoginMessage, setDisplayLoginMessage] = useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const auth = getAuth();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleLogin = () => {

    // For simplicity, let's just log the email and password for now
    console.log('Email:', email);
    console.log('Password:', password);
    if (validateEmail(email) && validatePassword(password)) {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigation.navigate('LandingPage');
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

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      </View>

      <Text style={styles.label}>{emailValidationMessage}</Text>

      <Text style={styles.label}>Password:</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(password) => setPassword(password)}
          placeholder="Enter your password"
          secureTextEntry = {!showPassword}
        />
        <MaterialCommunityIcons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            color="#aaa"
            style={styles.icon} 
            onPress={toggleShowPassword} 
        /> 
      </View>
      <Text style={styles.label}>{passwordValidationMessage}</Text>

      <Text style={styles.label}>{displayLoginMessage ? loginMessages : "login message placeholder! "} </Text>

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



export default LoginScreen;
