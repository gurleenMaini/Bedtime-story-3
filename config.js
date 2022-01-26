import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnURYhxi-5GYluaf4UH8eMz93ri6aWHww",
  authDomain: "bedtimestories-cc3f4.firebaseapp.com",
  projectId: "bedtimestories-cc3f4",
  storageBucket: "bedtimestories-cc3f4.appspot.com",
  messagingSenderId: "741907025345",
  appId: "1:741907025345:web:b317aa11b9fd4b040bf340"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
