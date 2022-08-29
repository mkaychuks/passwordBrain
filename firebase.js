// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuI8tx0HJ2rWsQ8EGbicP6Q4VvlWZUcKY",
  authDomain: "passwordmgt.firebaseapp.com",
  projectId: "passwordmgt",
  storageBucket: "passwordmgt.appspot.com",
  messagingSenderId: "599754531311",
  appId: "1:599754531311:web:d9cb8d8cc826080a1f161a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) // initialize authentication for the app


export { auth, app}