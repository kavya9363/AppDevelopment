// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9pzV6JJvblehdVzOL995CtoCbYh59Cmw",
  authDomain: "school-admission-portal-c481a.firebaseapp.com",
  projectId: "school-admission-portal-c481a",
  storageBucket: "school-admission-portal-c481a.appspot.com",
  messagingSenderId: "933108338941",
  appId: "1:933108338941:web:f13e24d11811071cd9ee94",
  measurementId: "G-9CLMEJ3PFQ" 
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
