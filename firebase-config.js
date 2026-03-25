// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, getDoc, setDoc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// Naya Login System Import
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBb1ctY6XJjxpMaNNhHi3XS2DMM-vd0flQ",
    authDomain: "balancesheet-d2042.firebaseapp.com",
    projectId: "balancesheet-d2042",
    storageBucket: "balancesheet-d2042.firebasestorage.app",
    messagingSenderId: "290526899485",
    appId: "1:290526899485:web:64e4dede6b1853e8cf85f4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Login module start

// Yahan getDoc ko export mein add kar diya gaya hai
export { db, auth, collection, addDoc, onSnapshot, doc, getDoc, setDoc, deleteDoc, updateDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut };