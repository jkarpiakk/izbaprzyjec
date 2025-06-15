const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Domyślny użytkownik admin: admin@izbaprzyjec.eu
// Wprowadź UID tego użytkownika poniżej:
const uid = '<WPROWADŹ_UID_ADMINA>'; // np. 'abc123...'

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Admin privileges granted to user', uid);
    process.exit();
  })
  .catch(console.error);
