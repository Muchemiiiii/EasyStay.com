// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";       // Email/Password auth
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9OBqMEvSRATTz5nXI-phihoUEGL5odbM",
  authDomain: "hotel-booking-3d39f.firebaseapp.com",
  projectId: "hotel-booking-3d39f",
  storageBucket: "hotel-booking-3d39f.appspot.com",
  messagingSenderId: "672563925127",
  appId: "1:672563925127:web:d55caf9cd4769d3ca62822",
  measurementId: "G-FSV61GPW4F"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics should only run in the browser (not SSR/build)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Services
const auth = getAuth(app);       // Authentication (email/password)
const db = getFirestore(app);    // Firestore Database
const storage = getStorage(app); // Storage for images/files

// ✅ Export so you can use them anywhere
export { app, analytics, auth, db, storage };
