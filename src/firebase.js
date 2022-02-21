import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEhp4Qmm00KbTHsDzIalize9l6R2elqpg",
    authDomain: "twitter-clone-457c7.firebaseapp.com",
    projectId: "twitter-clone-457c7",
    storageBucket: "twitter-clone-457c7.appspot.com",
    messagingSenderId: "1005553695384",
    appId: "1:1005553695384:web:b4edc53b5300f872992eed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;