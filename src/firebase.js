import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5hbZPAiD8WQl-f92_NvsPmGFt5FRm64w',
  authDomain: 'twitter-mohibk.firebaseapp.com',
  projectId: 'twitter-mohibk',
  storageBucket: 'twitter-mohibk.appspot.com',
  messagingSenderId: '336140340456',
  appId: '1:336140340456:web:0fc43502ced0790f9f8d5d',
  measurementId: 'G-EPSM903REJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
