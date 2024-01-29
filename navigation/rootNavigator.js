import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthStack } from './authStack';
import { AppStack } from './appStack';
//import { AuthenticatedUserContext } from '../providers';
//import { LoadingIndicator } from '../components';
//import {auth} from './config/firebase.js';

export const RootNavigator = () => {
  //const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  //var user = firebase.auth().currentUser;
  var user = 1;

  //if (isLoading) {
  //  return <LoadingIndicator />;
  //}

  return (
    <NavigationContainer>
      {<AuthStack />}
    </NavigationContainer>
  );
};

//TODO ADD LOADING SCREEN