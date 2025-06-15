const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Wklej tutaj UID administratora z Firebase Auth
const uid = '<ADMIN_UID>';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Admin privileges granted to', uid);
    process.exit();
  })
  .catch(console.error);
