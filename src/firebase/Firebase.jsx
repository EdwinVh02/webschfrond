import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyCclkFqP7r2Ors4jfjZHSU00I103Y1mJPA",
  authDomain: "your-room-9e781.firebaseapp.com",
  projectId: "your-room-9e781",
  storageBucket: "your-room-9e781.appspot.com",
  messagingSenderId: "176291315387",
  appId: "1:176291315387:web:1b1545503910abca9b339e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);

export const messaging = getMessaging(app);
