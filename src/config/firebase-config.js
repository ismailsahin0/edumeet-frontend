// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgQa-U3rOgcxX4w__8LNl858YvGzQyQY",
  authDomain: "edumeet-58d73.firebaseapp.com",
  projectId: "edumeet-58d73",
  storageBucket: "edumeet-58d73.appspot.com",
  messagingSenderId: "43750306031",
  appId: "1:43750306031:web:4d710b02247d3d87edeb1a",
  measurementId: "G-XGCXGC36KY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();