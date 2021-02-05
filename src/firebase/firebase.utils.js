import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBQOuLySXtUTGyCM7Ma-KzZ1u_LXF-G4F4",
    authDomain: "crwn-db-b2d79.firebaseapp.com",
    projectId: "crwn-db-b2d79",
    storageBucket: "crwn-db-b2d79.appspot.com",
    messagingSenderId: "880380819984",
    appId: "1:880380819984:web:30d52a4d126ec19efce895",
    measurementId: "G-GPE1V8X68Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;