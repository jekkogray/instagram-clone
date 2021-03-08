import firebase from "firebase";
import 'firebase/firestore'
// Provide your own firebaseConfig.json file here from your cloud fireStore project.
const firebaseConfig = require('./firebaseConfig.json');
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Access database.
const db = firebase.firestore();
// Access authentications.
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};