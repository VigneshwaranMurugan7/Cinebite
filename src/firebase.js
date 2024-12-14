
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZTYDxqrxc9q43QkURhAYbVhca_6v1mI",
  authDomain: "cinebite-ce894.firebaseapp.com",
  projectId: "cinebite-ce894",
  storageBucket: "cinebite-ce894.firebasestorage.app",
  messagingSenderId: "265240331070",
  appId: "1:265240331070:web:b9284cf8e2c4957849e26f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
