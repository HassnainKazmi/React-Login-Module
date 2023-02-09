import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyBGqFACMVGfu-35xu9AkiwAA5aRupoj5nQ",
  authDomain: "login-module-2a54d.firebaseapp.com",
  projectId: "login-module-2a54d",
  storageBucket: "login-module-2a54d.appspot.com",
  messagingSenderId: "848098286661",
  appId: "1:848098286661:web:4e7837d9dd2eb828bf972c",
  measurementId: "G-W13Y84E0EG",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export default db;
