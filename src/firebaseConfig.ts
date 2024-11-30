import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwBeqjrOuiBlL2Wx2N6UEvNgEsJJExLV0",
  authDomain: "suns-building.firebaseapp.com",
  projectId: "suns-building",
  storageBucket: "suns-building.firebasestorage.app",
  messagingSenderId: "968615537030",
  appId: "1:968615537030:web:19197a6807723b5efa2407",
  measurementId: "G-W5Q49ZP4YV"
};

// Inicialize o Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

