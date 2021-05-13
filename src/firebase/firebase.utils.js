import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCO7r9g5kkJoLq0GtQtg3w-TopzE4RmvD0",
  authDomain: "trading-platform-f2f17.firebaseapp.com",
  projectId: "trading-platform-f2f17",
  storageBucket: "trading-platform-f2f17.appspot.com",
  messagingSenderId: "304755729311",
  appId: "1:304755729311:web:c60e2be90dc8036f6793aa",
  measurementId: "G-22G7Q0Z10B",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
