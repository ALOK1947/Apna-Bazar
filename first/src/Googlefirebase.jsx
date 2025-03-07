// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLOgDDUxJ3e8hrnvaiESH4B6fQ-XN3r0",
  authDomain: "apna-bazar-a3e12.firebaseapp.com",
  projectId: "apna-bazar-a3e12",
  storageBucket: "apna-bazar-a3e12.firebasestorage.app",
  messagingSenderId: "39802990282",
  appId: "1:39802990282:web:311854705b31175177ce33",
  measurementId: "G-3MY9557SNJ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);