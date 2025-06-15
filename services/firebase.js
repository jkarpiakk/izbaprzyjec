// services/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-QfWBAsh-8tyP7qbRRbaSIoW8OHQJuC0",
  authDomain: "izbaprzyjec-9266b.firebaseapp.com",
  projectId: "izbaprzyjec-9266b",
  storageBucket: "izbaprzyjec-9266b.appspot.com",
  messagingSenderId: "751824268140",
  appId: "1:751824268140:web:...",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
