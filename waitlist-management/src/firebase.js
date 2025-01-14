import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

// Your Firebase configuration (replace with your Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyDas7xyUJENQNNPnmd2Kkd8ozyX0Zo2Oys",
  authDomain: "waitlistmanagement-8f204.firebaseapp.com",
  projectId: "waitlistmanagement-8f204",
  storageBucket: "waitlistmanagement-8f204.firebasestorage.app",
  messagingSenderId: "98406231519",
  appId: "1:98406231519:web:eacc8bdd15c4a3cd99e86a",
  measurementId: "G-VQHC939X6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Export the functions for interacting with the database
export { db, ref, set, push, onValue };


