// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5q0NZ9aj8_KzG5klMtjbKnJFMbEP3_KA",
  authDomain: "passwordmgt-4d4ff.firebaseapp.com",
  projectId: "passwordmgt-4d4ff",
  storageBucket: "passwordmgt-4d4ff.appspot.com",
  messagingSenderId: "971005183762",
  appId: "1:971005183762:web:35fd934403c80c69c895cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // initialize authentication for the app

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { auth, db }