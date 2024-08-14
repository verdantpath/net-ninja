import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDL7VPj8t7NaWknfUgdBG0W4pnUaqO2ZgY",
  authDomain: "muso-ninjas-ab983.firebaseapp.com",
  projectId: "muso-ninjas-ab983",
  storageBucket: "muso-ninjas-ab983.appspot.com",
  messagingSenderId: "936462754495",
  appId: "1:936462754495:web:6157610b658fdd6e401c0a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }