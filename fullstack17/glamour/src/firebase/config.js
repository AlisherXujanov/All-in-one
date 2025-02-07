import { initializeApp } from 'firebase/app'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDU36_qYOgqbxJ2Mwr1roZk1Tx0YHvy31Q",
  authDomain: "fullstack17-e8731.firebaseapp.com",
  projectId: "fullstack17-e8731",
  storageBucket: "fullstack17-e8731.firebasestorage.app",
  messagingSenderId: "308689684258",
  appId: "1:308689684258:web:af2d3d56b84f5780e9877b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

