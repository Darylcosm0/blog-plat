// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5itl5nNizxoNdhKr4Dz7Z3uXv31_1kU",
  authDomain: "blog-c2aad.firebaseapp.com",
  projectId: "blog-c2aad",
  storageBucket: "blog-c2aad.appspot.com",
  messagingSenderId: "239789911811",
  appId: "1:239789911811:web:67b57f7fa63235f261c336",
  measurementId: "G-8V94TFDNXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth (app);
export const provider = new GoogleAuthProvider();