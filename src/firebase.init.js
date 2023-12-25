// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxH8zoFQmLrjyaC5TEoy-cOm3PebnI7U",
  authDomain: "eu-cse-dept.firebaseapp.com",
  projectId: "eu-cse-dept",
  storageBucket: "eu-cse-dept.appspot.com",
  messagingSenderId: "28658148389",
  appId: "1:28658148389:web:e712634a602d23e34ccbcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export default app;