import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBPA7ZTDrU1oDPnqGARTKQkwjzWibw0VDg",
    authDomain: "good-company-brewing.firebaseapp.com",
    databaseURL: "https://good-company-brewing.firebaseio.com",
    projectId: "good-company-brewing",
    storageBucket: "good-company-brewing.appspot.com",
    messagingSenderId: "953171305013"
  };
var fire = firebase.initializeApp(config);
export default fire;