// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseapp =  {
    apiKey: "AIzaSyCrV3bE9DILN78te_zncnkMOFyc_TTaGDA",
    authDomain: "chalkbets-1bf48.firebaseapp.com",
    databaseURL: "https://chalkbets-1bf48-default-rtdb.firebaseio.com",
    projectId: "chalkbets-1bf48",
    storageBucket: "chalkbets-1bf48.appspot.com",
    messagingSenderId: "761565960474",
    appId: "1:761565960474:web:82826465f5fd5daf0eb4a3",
    measurementId: "G-3FSC8S7HYN"
}

const dbApp = initializeApp(firebaseapp)
const chalkbetsDB = getDatabase(dbApp)
