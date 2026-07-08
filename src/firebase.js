import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnyD6X271iEugrfFYI-dstJMisk8Hd3F8",
  authDomain: "contactus-kaveri.firebaseapp.com",
  databaseURL: "https://contactus-kaveri-default-rtdb.firebaseio.com",
  projectId: "contactus-kaveri",
  storageBucket: "contactus-kaveri.firebasestorage.app",
  messagingSenderId: "260258825256",
  appId: "1:260258825256:web:1b109b9f9beb6b49dd611d",
  measurementId: "G-FP8MR5R3EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
