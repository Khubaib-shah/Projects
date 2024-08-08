// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFAunZQctq-Rc01RuOxDmJHf1DHX_tCpM",
  authDomain: "my-project-647fc.firebaseapp.com",
  databaseURL: "https://my-project-647fc-default-rtdb.firebaseio.com",
  projectId: "my-project-647fc",
  storageBucket: "my-project-647fc.appspot.com",
  messagingSenderId: "723486564493",
  appId: "1:723486564493:web:88398824c966d17c1b02c4",
};
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  database,
  ref,
  set,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();
