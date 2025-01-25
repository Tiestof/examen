import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//Dotos de conexion da firebase
const firebaseConfig = {
    apiKey: "AIzaSyDA1k67nECjKYPK40nNWPekgGCB1C13a7Y",
    authDomain: "examen-6ef33.firebaseapp.com",
    projectId: "examen-6ef33",
    storageBucket: "examen-6ef33.firebasestorage.app",
    messagingSenderId: "528447714760",
    appId: "1:528447714760:web:e6a8808a333461a06e7cfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);