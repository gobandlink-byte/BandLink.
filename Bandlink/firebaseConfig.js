// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA3ce6AZVpab5C0rfTuVjBYydBSpaIJF4",
  authDomain: "bandlink-a9431.firebaseapp.com",
  projectId: "bandlink-a9431",
  storageBucket: "bandlink-a9431.firebasestorage.app",
  messagingSenderId: "461966039925",
  appId: "1:461966039925:web:9299701a67e1b23b08513c",
  measurementId: "G-KWLYHM66EP"
};
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
