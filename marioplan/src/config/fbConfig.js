import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWJpG59w0di8qmyy5KUlp9IQP-3uMq3X0",
    authDomain: "huy-marioplan.firebaseapp.com",
    databaseURL: "https://huy-marioplan.firebaseio.com",
    projectId: "huy-marioplan",
    storageBucket: "huy-marioplan.appspot.com",
    messagingSenderId: "895820309747",
    appId: "1:895820309747:web:711eb836fca0996374c386",
    measurementId: "G-8M0QTHCT12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;