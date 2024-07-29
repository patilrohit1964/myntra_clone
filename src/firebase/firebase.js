// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4NMRjf7I0Kj5_B1hwyqmbwxbWK_K3MnQ",
  authDomain: "myntra-b8df1.firebaseapp.com",
  projectId: "myntra-b8df1",
  storageBucket: "myntra-b8df1.appspot.com",
  messagingSenderId: "791370956217",
  appId: "1:791370956217:web:23d942106f92e44e864a68",
  measurementId: "G-M1H5C5K62J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);

