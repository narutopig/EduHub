import firebase, { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcmuIM2vPE9QmvV51BdrMiHPSAni9HILA",
  authDomain: "eduhub-c63d7.firebaseapp.com",
  projectId: "eduhub-c63d7",
  storageBucket: "eduhub-c63d7.appspot.com",
  messagingSenderId: "434553778657",
  appId: "1:434553778657:web:284916dd8c1b50243922a0",
  measurementId: "G-EJ0GCLVQ55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
