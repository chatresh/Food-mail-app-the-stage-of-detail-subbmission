import firebase from 'firebase';
require('@firebase/firestore')

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoxsjrUTnLOLIwUFMlEiRRoraiZ6zkyyY",
  authDomain: "food-mail.firebaseapp.com",
  databaseURL: "https://food-mail.firebaseio.com",
  projectId: "food-mail",
  storageBucket: "food-mail.appspot.com",
  messagingSenderId: "416300580527",
  appId: "1:416300580527:web:03684851c012738e059e5a",
  measurementId: "G-2DG12EH21T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
