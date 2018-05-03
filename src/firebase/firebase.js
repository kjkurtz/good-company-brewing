import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBPA7ZTDrU1oDPnqGARTKQkwjzWibw0VDg",
  authDomain: "good-company-brewing.firebaseapp.com",
  databaseURL: "https://good-company-brewing.firebaseio.com",
  projectId: "good-company-brewing",
  storageBucket: "good-company-brewing.appspot.com",
  messagingSenderId: "953171305013"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
