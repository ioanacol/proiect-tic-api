const serviceAccount = require('../firebase/key/tic-proiect-d7b45-firebase-adminsdk-prmjp-d35e65d20e.json');
const { getFirestore } = require('firebase-admin/firestore');
const { initializeApp, cert } = require('firebase-admin/app');

initializeApp({
  credential: cert(serviceAccount),
});

let firestoreService;
const initializeFirestore = () => {
  if (!firestoreService) {
    firestoreService = getFirestore();
  }
  return firestoreService;
};

module.exports = initializeFirestore;
