import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignupScreen';
import HomeScreen from '../pages/HomeScreen.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Create Profile' }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'HomeScreen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Navigation