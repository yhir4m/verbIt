import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4LPwli2U1UxPG7NWocELH1GsRPu3ZobI",
    authDomain: "verbit-28ccb.firebaseapp.com",
    projectId: "verbit-28ccb",
    storageBucket: "verbit-28ccb.firebasestorage.app",
    messagingSenderId: "550831991609",
    appId: "1:550831991609:web:74ace06ef5393b993d16e8",
    measurementId: "G-WDHQZS2ZDR"
};

const app = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword};
