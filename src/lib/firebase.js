import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

const firestore = firebaseApp.firestore()
const database = {
  users: firestore.collection('users'),
  photos: firestore.collection('photos')
};
const auth = firebaseApp.auth()
const {FieldValue} = firebase.firestore
const storage = firebase.storage().ref()

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)



export { 
  firebaseApp, 
  database, 
  auth, 
  FieldValue,
  storage
};