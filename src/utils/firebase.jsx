// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgK_jqwa21_RopRLOfb0NMnrKvANlMfkU",
  authDomain: "netflix-chatgpt-40b7b.firebaseapp.com",
  projectId: "netflix-chatgpt-40b7b",
  storageBucket: "netflix-chatgpt-40b7b.firebasestorage.app",
  messagingSenderId: "634158886390",
  appId: "1:634158886390:web:e0f1664fbba9d95e092bd7",
  measurementId: "G-363HVEPFJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);