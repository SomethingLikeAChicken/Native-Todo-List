// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3sX5livg-yr3uy2VAjNbndV2raWe7wM",
  authDomain: "todo-list-80c83.firebaseapp.com",
  projectId: "todo-list-80c83",
  storageBucket: "todo-list-80c83.appspot.com",
  messagingSenderId: "10393103976",
  appId: "1:10393103976:web:a619cf269542ac0b2c15dd"
};
// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export {auth, db};
