// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT83dlaIFzZFLH3ASYwweP3Qh1FSpvJAQ",
  authDomain: "netflixgpt-cf320.firebaseapp.com",
  projectId: "netflixgpt-cf320",
  storageBucket: "netflixgpt-cf320.appspot.com",
  messagingSenderId: "1044713107150",
  appId: "1:1044713107150:web:c07abcd82205059f4cea9f",
  measurementId: "G-2PR8X3KZES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
