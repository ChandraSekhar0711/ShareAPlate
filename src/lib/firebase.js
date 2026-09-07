
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvBs6EbE-pL6JWLR5ci9-xHLdAZdANhag",
  authDomain: "shareaplate-bb59a.firebaseapp.com",
  projectId: "shareaplate-bb59a",
  storageBucket: "shareaplate-bb59a.appspot.com",
  messagingSenderId: "305118445949",
  appId: "1:305118445949:web:fe2866e2894f541b660c14",
  measurementId: "G-S1CGG7FSE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { app, auth, db, storage, googleProvider, appleProvider };
