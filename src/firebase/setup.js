import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBx5PJi__QxIvWFt3ocrXQmQd8MMLhL1Wc",
  authDomain: "tmdb-81428.firebaseapp.com",
  projectId: "tmdb-81428",
  storageBucket: "tmdb-81428.appspot.com",
  messagingSenderId: "843650677626",
  appId: "1:843650677626:web:01b390519ec1b73740b4c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const database = getFirestore(app)