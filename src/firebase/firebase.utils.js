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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); //DocumentReference

    const snapshot = await userRef.get(); //Promise<DocumentSnapshot>

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;  //DocumentReference
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
