import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { toast } from 'react-toastify';

const config = {
  apiKey: 'AIzaSyDUEDN70LSlzXx_-itS4FlhAj2_qsKqth0',
  authDomain: 'doancoso-kaya.firebaseapp.com',
  databaseURL: 'https://doancoso-kaya.firebaseio.com',
  projectId: 'doancoso-kaya',
  storageBucket: 'doancoso-kaya.appspot.com',
  messagingSenderId: '1019649062912',
  appId: '1:1019649062912:web:274a08c22fa580941080e5',
  measurementId: 'G-FQRPVJXFTG'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {return;}

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
export const signInWithGoogle = () => auth.signInWithPopup(provider)
  .then(() => toast('Horay, No Bug, Login Successful!'))
  .catch((err) => toast('Login Failed', err));

export const signOut = () => auth.signOut()
  .then(() => toast('Logout Successful!'))
  .catch((err) => toast('Logout Failed :<', err));

export default firebase;