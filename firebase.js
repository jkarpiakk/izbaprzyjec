let auth = null, db = null;
if (typeof window !== 'undefined') {
  const { initializeApp, getApps } = require('firebase/app');
  const { getAuth } = require('firebase/auth');
  const { getFirestore } = require('firebase/firestore');
  const { firebaseConfig } = require('./firebaseConfig');
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
}
module.exports = { auth, db };
