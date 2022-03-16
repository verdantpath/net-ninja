import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp
} from 'firebase/firestore'
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