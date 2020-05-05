import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOtM9Lmk1odKeW1n8QD5QBJ7Gq-OaSQc4",
  authDomain: "fresh-delivery-20fa8.firebaseapp.com",
  databaseURL: "https://fresh-delivery-20fa8.firebaseio.com",
  projectId: "fresh-delivery-20fa8",
  storageBucket: "fresh-delivery-20fa8.appspot.com",
  messagingSenderId: "513071330895",
  appId: "1:513071330895:web:1360032df1ed4de52f9c3a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
