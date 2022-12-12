// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU0244KputVLIrD6AaxvfP_0RRlDwf0dg",
  authDomain: "panioleta-2b47f.firebaseapp.com",
  projectId: "panioleta-2b47f",
  storageBucket: "panioleta-2b47f.appspot.com",
  messagingSenderId: "564728792614",
  appId: "1:564728792614:web:0da8e1356f23e1a93348e7",
  measurementId: "G-DDZB94K09E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);