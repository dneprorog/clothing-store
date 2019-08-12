import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAD0JpfUYg_cXO4eadBM7hJXa3X7PFKyts",
    authDomain: "clothing-store-af36a.firebaseapp.com",
    databaseURL: "https://clothing-store-af36a.firebaseio.com",
    projectId: "clothing-store-af36a",
    storageBucket: "",
    messagingSenderId: "992496797059",
    appId: "1:992496797059:web:1169eaaadf0c8a00"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



