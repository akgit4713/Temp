import firebase from "firebase";
import "firebase/storage";

// THIS COMPONENT IS FOR DETAILS OF SOUNDRULE PROJECT IN FIREBASE

var firebaseConfig = {
  apiKey: "AIzaSyB3NYNW14kQSXyrK55D9t0mRdbaZD9597c",
  authDomain: "soundsplash-ccfc1.firebaseapp.com",
  databaseURL: "https://soundsplash-ccfc1-default-rtdb.firebaseio.com/",
  projectId: "soundsplash-ccfc1",
  storageBucket: "soundsplash-ccfc1.appspot.com",
  messagingSenderId: "1096876190299",
  appId: "1:1096876190299:web:e989616c01b36afcf1ed7e",
  measurementId: "G-N2Z4J1YVT7"
}
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
