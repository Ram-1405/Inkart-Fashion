// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnqGwGN6vtt-RJI-7lB-rcYP8hyam5MJ8",
  authDomain: "inkart-fashionstore.firebaseapp.com",
  projectId: "inkart-fashionstore",
  storageBucket: "inkart-fashionstore.appspot.com",
  messagingSenderId: "623991676801",
  appId: "1:623991676801:web:91515964545fe937759280",
  measurementId: "G-Z10ZNYPPGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage and export it
const storage = getStorage(app); // Storage initialization

export { db, storage }; // Export both Firestore and Storage
