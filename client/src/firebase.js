// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-82d03.firebaseapp.com",
  projectId: "mern-blog-82d03",
  storageBucket: "mern-blog-82d03.appspot.com",
  messagingSenderId: "218002342825",
  appId: "1:218002342825:web:df05a37589472ef3383ab8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
