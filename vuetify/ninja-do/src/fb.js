// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import secret from '../secret'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: secret.firebaseApiKey,
  authDomain: "ninja-do.firebaseapp.com",
  projectId: "ninja-do",
  storageBucket: "ninja-do.appspot.com",
  messagingSenderId: "91486276991",
  appId: "1:91486276991:web:39b35167a9e903e385de4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db;