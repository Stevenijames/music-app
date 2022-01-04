import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmkRSKrVB4m2bLaarwHAEmzB1LQWGCb8s",
  authDomain: "music-8c49d.firebaseapp.com",
  projectId: "music-8c49d",
  storageBucket: "music-8c49d.appspot.com",
  appId: "1:1001344110826:web:81a0e11d6b18b48a494793",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
