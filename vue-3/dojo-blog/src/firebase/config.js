import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDB2cd7uzkUn8nn9fSbKK7upB4NaAuS4PA",
  authDomain: "net-ninja-vue-blog-d5f45.firebaseapp.com",
  projectId: "net-ninja-vue-blog-d5f45",
  storageBucket: "net-ninja-vue-blog-d5f45.appspot.com",
  messagingSenderId: "839916580585",
  appId: "1:839916580585:web:0bf411076bce077bd18a78"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }