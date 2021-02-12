import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBQOuLySXtUTGyCM7Ma-KzZ1u_LXF-G4F4",
  authDomain: "crwn-db-b2d79.firebaseapp.com",
  projectId: "crwn-db-b2d79",
  storageBucket: "crwn-db-b2d79.appspot.com",
  messagingSenderId: "880380819984",
  appId: "1:880380819984:web:30d52a4d126ec19efce895",
  measurementId: "G-GPE1V8X68Q"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
