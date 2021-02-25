

const config = {
    apiKey: "AIzaSyAPyr2xxAksmKnEbbcG9bNoyzx6uxyayrs",
    authDomain: "bumblr-f293c.firebaseapp.com",
    projectId: "bumblr-f293c",
    storageBucket: "bumblr-f293c.appspot.com",
    messagingSenderId: "18245726243",
    appId: "1:18245726243:web:4150f78c495db7aaedc196"
  };
  
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;




  export { firebase, FieldValue };