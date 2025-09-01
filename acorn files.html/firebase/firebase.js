// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALpj24V6ODHp0xHgEF9Ed0btKvAo7zmhk",
  authDomain: "acorn-website-6edf6.firebaseapp.com",
  projectId: "acorn-website-6edf6",
  storageBucket: "acorn-website-6edf6.firebasestorage.app",
  messagingSenderId: "535127963070",
  appId: "1:535127963070:web:7e62fe34e3daa8be8175ef",
  measurementId: "G-40633F3ZH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);