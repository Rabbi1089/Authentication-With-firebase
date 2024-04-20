// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAN7raCkC7lmvjQFrjc5gG-TmjCauQu9tI",
  authDomain: "email-password-authentic-7f1cc.firebaseapp.com",
  projectId: "email-password-authentic-7f1cc",
  storageBucket: "email-password-authentic-7f1cc.appspot.com",
  messagingSenderId: "446455540171",
  appId: "1:446455540171:web:5525e8ebb35fafafd96e4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
