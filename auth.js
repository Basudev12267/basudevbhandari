// auth.js

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZU5Hoiqmf6LAsDSe2G--NDqc36D6e_2Y",
    authDomain: "basudev-login.firebaseapp.com",
    projectId: "basudev-login",
    storageBucket: "basudev-login.firebasestorage.app",
    messagingSenderId: "1065816186652",
    appId: "1:1065816186652:web:14cbfa6b78f297b750a4d9",
    measurementId: "G-J60P5K8QP9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();

// Firebase reCAPTCHA Site Key
const recaptchaSiteKey = '6Lc5xMEqAAAAAIPJUylqBhsXVFEAHXqSjFK6Nouz';

// Register User Function
async function registerUser(email, password) {
    try {
        const token = await executeRecaptcha('REGISTER');
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// Login User Function
async function loginUser(email, password) {
    try {
        const token = await executeRecaptcha('LOGIN');
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

// reCAPTCHA Execution Function
async function executeRecaptcha(action) {
    return grecaptcha.enterprise.execute(recaptchaSiteKey, { action: action });
}
