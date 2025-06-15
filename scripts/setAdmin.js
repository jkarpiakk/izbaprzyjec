const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const uid = '<ADMIN_UID>'; // your admin user's UID
admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => { console.log('Admin role set for', uid); process.exit(); })
  .catch(console.error);
