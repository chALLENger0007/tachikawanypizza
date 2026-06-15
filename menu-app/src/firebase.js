import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCyNr9HbX25Nu0sGKjJHZxgKSGm5g8vuM",
  authDomain: "arenguren.firebaseapp.com",
  databaseURL: "https://arenguren-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arenguren",
  storageBucket: "arenguren.firebasestorage.app",
  messagingSenderId: "654994959336",
  appId: "1:654994959336:web:dd9554c5b7cd27cf6f925d"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export default app;
