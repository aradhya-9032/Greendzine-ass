// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGP2DbMSFqdoimbbUO-xoOybSi3DYQ1pU",
  authDomain: "emailpasswordlogin-1628a.firebaseapp.com",
  projectId: "emailpasswordlogin-1628a",
  storageBucket: "emailpasswordlogin-1628a.appspot.com",
  messagingSenderId: "631345822611",
  appId: "1:631345822611:web:752cad444f48d9bbb40666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);