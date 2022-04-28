// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMJwjyzhaQ8_oY4DBSUbOSM49R-6-vx9A",
  authDomain: "twitter-clone-6e15e.firebaseapp.com",
  projectId: "twitter-clone-6e15e",
  storageBucket: "twitter-clone-6e15e.appspot.com",
  messagingSenderId: "794790897907",
  appId: "1:794790897907:web:2dd83309580a97885daf86",
  measurementId: "G-DJHK6H9B38",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
