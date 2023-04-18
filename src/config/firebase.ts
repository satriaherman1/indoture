// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUCMJ_YlTyA_W_eL-AYhntMNIHCoqIyx4",
  authDomain: "test-websiteku.firebaseapp.com",
  databaseURL: "https://test-websiteku.firebaseio.com",
  projectId: "test-websiteku",
  storageBucket: "test-websiteku.appspot.com",
  messagingSenderId: "134367927397",
  appId: "1:134367927397:web:03e6cf050922ea3ded7a8c",
  measurementId: "G-M9M8P158ZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
