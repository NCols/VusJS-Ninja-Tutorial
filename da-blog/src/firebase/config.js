import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1pIY2Ufwk3cMZuNq1l_0euURta-xCWps",
    authDomain: "net-ninja-tuts-d7028.firebaseapp.com",
    projectId: "net-ninja-tuts-d7028",
    storageBucket: "net-ninja-tuts-d7028.appspot.com",
    messagingSenderId: "1053896890066",
    appId: "1:1053896890066:web:c359b98cf70b2bc0c97f0b"
  };


  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()

  export { projectFirestore }