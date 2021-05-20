// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAv-L5euYFWEZaw9MU5JzAPgTJaBuEW0Ok",
  authDomain: "real-club-webapp.firebaseapp.com",
  projectId: "real-club-webapp",
  storageBucket: "real-club-webapp.appspot.com",
  messagingSenderId: "238133784681",
  appId: "1:238133784681:web:38f8fba39cf00ded33f2f8",
  measurementId: "G-4DXQ0M072R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const fs = firebase.firestore();
