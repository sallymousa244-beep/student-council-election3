import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeeI15O6aFwM23xFDAPf8U3IBbNN6yr4Y",
  authDomain: "student-council-election-2101d.firebaseapp.com",
  projectId: "student-council-election-2101d",
  storageBucket: "student-council-election-2101d.firebasestorage.app",
  messagingSenderId: "58079252092",
  appId:"1:58079252092:web:7e1fd470cb209b8e90c3f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp
};