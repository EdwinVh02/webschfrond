import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import {getMessaging} from "firebase/messaging"
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUqPGfobJL-EgY1wC6DgqV-z_qFO7okh8",
  authDomain: "santacecilia-94329.firebaseapp.com",
  projectId: "santacecilia-94329",
  storageBucket: "santacecilia-94329.appspot.com",
  messagingSenderId: "583499388766",
  appId: "1:583499388766:web:8b6b5df18f9c1f600e21cf",
//   measurementId: "G-8CQ3Q1BEZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const firebaseConfig = {
//     apiKey: "AIzaSyCclkFqP7r2Ors4jfjZHSU00I103Y1mJPA",
//     authDomain: "your-room-9e781.firebaseapp.com",
//     projectId: "your-room-9e781",
//     storageBucket: "your-room-9e781.appspot.com",
//     messagingSenderId: "176291315387",
//     appId: "1:176291315387:web:1b1545503910abca9b339e"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);

export const messaging = getMessaging(app);
