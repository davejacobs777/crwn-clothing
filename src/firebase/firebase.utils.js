import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhkasqpYaSdG4k2Sz8m2na3c8GDQFpGZQ",
    authDomain: "crwn-db-bcf18.firebaseapp.com",
    databaseURL: "https://crwn-db-bcf18.firebaseio.com",
    projectId: "crwn-db-bcf18",
    storageBucket: "crwn-db-bcf18.appspot.com",
    messagingSenderId: "951178947332",
    appId: "1:951178947332:web:b420a1f2091d13d355be51",
    measurementId: "G-DQ8236F229"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
