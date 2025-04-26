// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//Replace this config with your own from Firebase Console!
const firebaseConfig = {
  apiKey: "AIzaSyBmyV0EAFGTpa7cIS9HlYhJq3aKU_Ngwe4",
  authDomain: "healthcare-2034b.firebaseapp.com",
  projectId: "healthcare-2034b",
  storageBucket: "healthcare-2034b.firebasestorage.app",
  messagingSenderId: "936240601570",
  appId: "1:936240601570:web:8acca88e867ac453c7c1bb",
  measurementId: "G-1H7K0LL63D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
