// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyA6GN9LGUUu_YzEdQ5dMY2YuHpKgMBdysk",
  authDomain: "vue-firebase-f4f73.firebaseapp.com",
  projectId: "vue-firebase-f4f73",
  storageBucket: "vue-firebase-f4f73.firebasestorage.app",
  messagingSenderId: "971357192415",
  appId: "1:971357192415:web:6ac6bf9a65fe67cca8696a",
  measurementId: "G-VMDBC48J2T"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };