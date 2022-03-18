import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
import {
  getAuth, createUserWithEmailAndPassword
} from 'firebase/auth'
import secure from '../secure'

const firebaseConfig = {
  apiKey: secure.firebaseApiKey,
  authDomain: "net-ninja-firebase-9-dojo.firebaseapp.com",
  projectId: "net-ninja-firebase-9-dojo",
  storageBucket: "net-ninja-firebase-9-dojo.appspot.com",
  messagingSenderId: "538069376801",
  appId: "1:538069376801:web:c0aaf7060a3a98b5862860"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

// collection ref
const colRef = collection(db, 'books')

// queries
const q = query(colRef, orderBy('createdAt'))

// real time collection data
onSnapshot(q, (snapshot) => {
  let books = []
    snapshot.docs.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id
      })
    })
    console.log(books)
})

// adding documents
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value, 
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting documents
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})

// get a single document
const docRef = doc(db, 'books', 'UH6Qia9ExfRjegMljKR7')

onSnapshot(docRef, (doc) =>{
  console.log(doc.data(), doc.id)
})

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', updateForm.id.value)

  updateDoc(docRef, {
    title: 'updated title',
  })
  .then(() => {
    updateForm.reset()
  })
})

// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created: ', cred.user)
      signupForm.reset()
    })
    .catch((err) => {
      console.log(err.message) 
    })

})