// src/firebaseInit.js
import { initializeApp } from 'firebase/app';
import {getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBs3tctCI8z1v_hadW4AALGEtkbBrXVlqQ",
  authDomain: "capital-trabajo.firebaseapp.com",
  projectId: "capital-trabajo",
  storageBucket: "capital-trabajo.appspot.com",
  messagingSenderId: "706818248067",
  appId: "1:706818248067:web:66da714ea767ca9318bab6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;