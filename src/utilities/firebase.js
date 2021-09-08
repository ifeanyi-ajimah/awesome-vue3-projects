import firebase from "firebase/app";

import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA7kDQMZWUp3P2ZlUMPw_2TKOf1vs1IZeg",
    authDomain: "vue-3-e1c70.firebaseapp.com",
    projectId: "vue-3-e1c70",
    storageBucket: "vue-3-e1c70.appspot.com",
    messagingSenderId: "367432658282",
    appId: "1:367432658282:web:de6abab9fced5ef1520913"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

