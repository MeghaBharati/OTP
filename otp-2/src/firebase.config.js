// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFqy0lumCd7DCtypruRYPJZsNKdypxeg",
  authDomain: "tp-clone.firebaseapp.com",
  projectId: "tp-clone",
  storageBucket: "tp-clone.appspot.com",
  messagingSenderId: "519300191401",
  appId: "1:519300191401:web:10fe9674a215103a57c5b8",
  measurementId: "G-TFFS0XQLGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
