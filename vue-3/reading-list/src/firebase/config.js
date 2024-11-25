import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyATwSb5xnrhTp_B0ycaaj_YM_2M12YN2V8",
  authDomain: "fb9-reading-list-2494d.firebaseapp.com",
  projectId: "fb9-reading-list-2494d",
  storageBucket: "fb9-reading-list-2494d.firebasestorage.app",
  messagingSenderId: "619881946878",
  appId: "1:619881946878:web:13c9fc20ef6aea3ca78faf"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }