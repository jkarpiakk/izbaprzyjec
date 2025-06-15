import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
let app = getApps()[0] || initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
