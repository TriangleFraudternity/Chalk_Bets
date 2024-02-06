// SignUpScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {validateEmail,validatePassword} from '../helpers/validationHelper.js';
import styles from '../assets/authStyles.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import {auth} from '../config/firebase.js';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const [passwordConfirmValidationMessage, setPasswordConfirmValidationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }



  const handleCreateProfile = () => {
    // Add logic to create the user profile
    // You can send the data to your backend or store it locally, depending on your needs
    if (validateEmail(email) && validatePassword(password) && password == confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('LandingPage');
        })
        .catch((error) => {
            if (error.code == 'auth/email-already-in-use') {
              setEmailValidationMessage("Email is already in use");
              console.log("Email is already in use");
            }
            const errorCode = error.code;
            const errorMessage = error.message;
      });
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    }
    else{
      if (password != confirmPassword){
        setPasswordConfirmValidationMessage("Passwords must match");
      }
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
      <Text style={styles.label}>Name:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
        />
      </View>

      
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
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
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
      

      <Text style={styles.label}>Confirm Password:</Text>
      <Text style={styles.label}>Password:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          defaultValue={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="Confirm Password"
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
      
      <Text style={styles.label}>{passwordConfirmValidationMessage}</Text>
      <Text style={styles.label}>{passwordValidationMessage}</Text>


      <Button title="Create Profile" onPress={handleCreateProfile} />

    </View>
  );
};



export default SignUpScreen;
