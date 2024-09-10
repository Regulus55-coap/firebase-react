// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM4f1hZS2fD7AHVFP669tIrz5AJr_08aM",
  authDomain: "ccccc-de9ba.firebaseapp.com",
  projectId: "ccccc-de9ba",
  storageBucket: "ccccc-de9ba.appspot.com",
  messagingSenderId: "745623428722",
  appId: "1:745623428722:web:7104478e22287acb326ceb",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export the Firebase services you need
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage();
