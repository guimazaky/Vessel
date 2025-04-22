import { initializeApp } from "firebase/app";
import {
  setPersistence,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXLaR3tDUmcTvadMgjCeauUbo9AyClkzA",
  authDomain: "vessel-16db9.firebaseapp.com",
  projectId: "vessel-16db9",
  storageBucket: "vessel-16db9.firebasestorage.app",
  messagingSenderId: "341124817008",
  appId: "1:341124817008:web:9e3494ff34a9d1eee254b5",
  measurementId: "G-6JSR0LLJH6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
