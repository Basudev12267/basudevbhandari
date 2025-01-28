// auth.js

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqi2Di1GMRSXk_wQ1GF8BG46B36D74EW4",
    authDomain: "basudev-universe.firebaseapp.com",
    projectId: "basudev-universe",
    storageBucket: "basudev-universe.appspot.com",
    messagingSenderId: "211358921963",
    appId: "1:211358921963:web:6f17f25b48bb4949653aae",
    measurementId: "G-MGEWM1HD00"
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
