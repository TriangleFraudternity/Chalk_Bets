// SignUpScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {validateEmail,validatePassword} from '../helpers/validationHelper.js';

import {auth} from '../config/firebase.js';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');


  const handleCreateProfile = () => {
    // Add logic to create the user profile
    // You can send the data to your backend or store it locally, depending on your needs
    if (validateEmail(email) && validatePassword(password)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigation.navigate('LoginScreen');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

      });

      // For simplicity, let's just log the profile data for now
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    }
    else{
      if (!validateEmail(email)){
        setEmailValidationMessage('Not a valid email');
      }
      if (!validatePassword(password)){
        setPasswordValidationMessage('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number');
      }
    }

    // Navigate to the next screen (you can replace 'NextScreen' with your desired screen)
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />

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
        placeholder="Tell us about yourself"
        multiline
      />
      <Text style={styles.label}>{passwordValidationMessage}</Text>


      <Button title="Create Profile" onPress={handleCreateProfile} />

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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SignUpScreen;
