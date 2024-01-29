import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { RootNavigator } from './navigation/rootNavigator';
//import { AuthenticatedUserProvider } from './providers';

const App = () => {
  return (
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
  );
};

export default App;