import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCvD_m-5jnB5xXKKHRyWdnmdO_ZiCJ1hQ",
  authDomain: "tiendapellizzaroreact.firebaseapp.com",
  projectId: "tiendapellizzaroreact",
  storageBucket: "tiendapellizzaroreact.appspot.com",
  messagingSenderId: "341906697580",
  appId: "1:341906697580:web:3f3ac093a540ff05379749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app