import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

let app;
if (typeof window !== 'undefined') {
  app = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApps()[0];
}

export const auth = typeof window !== 'undefined' && app ? getAuth(app) : null;
export const db = typeof window !== 'undefined' && app ? getFirestore(app) : null;
