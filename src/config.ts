import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCDgwLcO4QDZG1A2PvVe8C13JDbrGJDeRY",
  authDomain: "wikibook-43fe5.firebaseapp.com",
  databaseURL: "https://wikibook-43fe5.firebaseio.com",
  projectId: "wikibook-43fe5",
  storageBucket: "wikibook-43fe5.appspot.com",
  messagingSenderId: "871033771498",
  appId: "1:871033771498:web:cfe8bf3333e3eca2cece93",
  measurementId: "G-JVYXFS47Z0"
};

firebase.initializeApp(config);
export default firebase;
