import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxkjUEbn1aS6aN65eUNzf4u3jcT6XJNtQ",
  authDomain: "gif-searcher-36f08.firebaseapp.com",
  projectId: "gif-searcher-36f08",
  storageBucket: "gif-searcher-36f08.appspot.com",
  messagingSenderId: "255206087454",
  appId: "1:255206087454:web:56b1790a0fe9a3e100070f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
