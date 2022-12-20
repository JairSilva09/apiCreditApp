const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyAZ45_N7JfWvZqRZu_omdfPT0zAK8CuD8M",
  authDomain: "creditappdb.firebaseapp.com",
  projectId: "creditappdb",
  storageBucket: "creditappdb.appspot.com",
  messagingSenderId: "394184805334",
  appId: "1:394184805334:web:15737e714416f961237277"
};

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app
