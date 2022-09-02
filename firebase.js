// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJE1H0CPnE30v8DGQG9OkbfaimdphT7TA",
  authDomain: "passwordmgt-f123c.firebaseapp.com",
  projectId: "passwordmgt-f123c",
  storageBucket: "passwordmgt-f123c.appspot.com",
  messagingSenderId: "126188382356",
  appId: "1:126188382356:web:78528f0d973d7474b76c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // initialize authentication for the app
const db = getFirestore(app); // initialize the storage db


export { auth, db}