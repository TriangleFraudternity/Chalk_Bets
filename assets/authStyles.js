import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Primary (Bright) Red: '#990033'
//Secondary (Dull) Red: '#400002'
//Chalk White:          '#FFFEF9'
//Chalkboard Gray:      '#292929'
//Rustic Gold:          '#886300'

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
      paddingHorizontal: 8,
      alignSelf: 'center',
    },
    signupText: {
      marginTop: 16,
      marginLeft: 16,
      textAlign: 'center',
    },
    signupLink: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'space-between', 
      },
      icon: {
        marginRight: 10,
        paddingVertical: 0,
      },
    
  });

export { styles as default };