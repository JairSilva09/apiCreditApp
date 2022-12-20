// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//const initializeApp = require("firebase/app")
//const coleccion = require("firebase/firestore/lite")
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebase = require('firebase');

// const firebaseConfig = {
//   apiKey: "AIzaSyAZ45_N7JfWvZqRZu_omdfPT0zAK8CuD8M",
//   authDomain: "creditappdb.firebaseapp.com",
//   projectId: "creditappdb",
//   storageBucket: "creditappdb.appspot.com",
//   messagingSenderId: "394184805334",
//   appId: "1:394184805334:web:15737e714416f961237277"
// };

// firebase.initializeApp(firebaseConfig); //initialize firebase app 
// module.exports = { firebase }; //export the app

// // Initialize Firebase
// const app = initializeApp.initializeApp(firebaseConfig);
// //const db = coleccion.getFirestore(app);

// // Get a list of cities from your database
// async function getCustomers(database) {
//     const customers = coleccion.collection(database, 'customers');  
//     const customersSnapshot = await coleccion.getDocs(customers);
//     const customersList = customersSnapshot.docs.map(doc => doc.data());
//     return customersList;
// }

// module.exports = { app,getCustomers }; 