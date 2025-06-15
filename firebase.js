import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
let app;
if (typeof window!=='undefined') {
  if (!getApps().length) initializeApp(firebaseConfig);
  app = getApps()[0];
}
export const auth = app?getAuth(app):null;
export const db = app?getFirestore(app):null;
