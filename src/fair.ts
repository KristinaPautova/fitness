import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDOIxwX2czO_H7-GVM9yo_a08KqUW5b-dU",
  authDomain: "coffee-2be74.firebaseapp.com",
  projectId: "coffee-2be74",
  storageBucket: "coffee-2be74.appspot.com",
  messagingSenderId: "563810725514",
  appId: "1:563810725514:web:4a2b502409508ae9448773",
  measurementId: "G-JECM75H7ZG",
});

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth, firebase };
