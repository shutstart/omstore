import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhfGj_b8v3dlCZEo6DkD1R8eDTJ7OjYnQ",
    authDomain: "omstore-77301.firebaseapp.com",
    databaseURL: "https://omstore-77301.firebaseio.com",
    projectId: "omstore-77301",
    storageBucket: "omstore-77301.appspot.com",
    messagingSenderId: "932201683259",
    appId: "1:932201683259:web:22df30d77a38b3d9e7bf1e",
    measurementId: "G-MHXN9V4GVW"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => { 
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(err){
        console.log('error creating user',err.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;