import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

let app;
if (typeof window !== "undefined") {
  try {
    app = !getApps().length
      ? initializeApp(firebaseConfig)
      : getApps()[0];
  } catch (e) {
    console.warn("Firebase initialization error:", e);
    app = getApps()[0];
  }
}

export const auth = typeof window !== "undefined" && app ? getAuth(app) : null;
export const db = typeof window !== "undefined" && app ? getFirestore(app) : null;
