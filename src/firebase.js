// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlcWyhsxAXLLx9X8GcJIS3nDA7LIxsZLU",
  authDomain: "kekaauthtest.firebaseapp.com",
  projectId: "kekaauthtest",
  storageBucket: "kekaauthtest.appspot.com",
  messagingSenderId: "223222636383",
  appId: "1:223222636383:web:a652b9186706e04e1aa0ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);
