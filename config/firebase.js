import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";

// add firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCrV3bE9DILN78te_zncnkMOFyc_TTaGDA",
    authDomain: "chalkbets-1bf48.firebaseapp.com",
    databaseURL: "https://chalkbets-1bf48-default-rtdb.firebaseio.com",
    projectId: "chalkbets-1bf48",
    storageBucket: "chalkbets-1bf48.appspot.com",
    messagingSenderId: "761565960474",
    appId: "1:761565960474:web:82826465f5fd5daf0eb4a3",
    measurementId: "G-3FSC8S7HYN"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app);

export { auth };