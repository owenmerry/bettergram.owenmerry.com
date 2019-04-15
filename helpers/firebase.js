import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyB9Mw9rK9wQQS9S-noqnauEcMzYaGLQQPs",
  authDomain: "bettergram-51769.firebaseapp.com",
  databaseURL: "https://bettergram-51769.firebaseio.com",
  projectId: "bettergram-51769",
  storageBucket: "bettergram-51769.appspot.com",
  messagingSenderId: "434119701235"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const storageRoot = firebase.storage().ref();
export const storage = firebase.storage();

export default firebase;
