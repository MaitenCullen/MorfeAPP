// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBwDs3Ord8TckLnlWXnJq-kCYBjoNRdPyk",
  authDomain: "morfeapp-8b53e.firebaseapp.com",
  databaseURL: "https://morfeapp-8b53e-default-rtdb.firebaseio.com",
  projectId: "morfeapp-8b53e",
  storageBucket: "morfeapp-8b53e.appspot.com",
  messagingSenderId: "451397517220",
  appId: "1:451397517220:web:8ebe397f5d3ce96e55cb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);