// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5ad1a.firebaseapp.com",
  projectId: "reactchat-5ad1a",
  storageBucket: "reactchat-5ad1a.appspot.com",
  messagingSenderId: "19861059474",
  appId: "1:19861059474:web:8aa788fc6726f59a43f34b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
