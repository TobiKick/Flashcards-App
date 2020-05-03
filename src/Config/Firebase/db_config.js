
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCTqVLDpGld0er12R2eS_F-JTmYFUBr5sU",
  authDomain: "flashcards-app-87fb3.firebaseapp.com",
  databaseURL: "https://flashcards-app-87fb3.firebaseio.com",
  projectId: "flashcards-app-87fb3",
  storageBucket: "flashcards-app-87fb3.appspot.com",
  messagingSenderId: "186239211385",
  appId: "1:186239211385:web:c488363e0d269929ae01a8",
  measurementId: "G-X3JQCXTSC2"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
