//Do not store config on the client side

//  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//DANGER: DO not share config publicly.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfIUEAfH5rJ5yrcVlbN9ZWO8aZbrup6IE",
  authDomain: "simple-firebase-ed7c5.firebaseapp.com",
  projectId: "simple-firebase-ed7c5",
  storageBucket: "simple-firebase-ed7c5.firebasestorage.app",
  messagingSenderId: "912991695013",
  appId: "1:912991695013:web:b3ed9533d2cc5b64669d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;