// Setting up Firebase with your website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZU5Hoiqmf6LAsDSe2G--NDqc36D6e_2Y",
    authDomain: "basudev-login.firebaseapp.com",
    projectId: "basudev-login",
    storageBucket: "basudev-login.firebasestorage.app",
    messagingSenderId: "1065816186652",
    appId: "1:1065816186652:web:14cbfa6b78f297b750a4d9",
    measurementId: "G-J60P5K8QP9"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if email and password are not empty
    if (email === "" || password === "") {
        errorMessage.innerText = "Please fill in both email and password.";
        return;
    }

    // Firebase code for sign up
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed up successfully
            console.log(result);
            document.write("You are Signed Up");
            setTimeout(() => {
                window.location.href = "index.html"; // Redirect to login page after sign-up
            }, 2000);
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            document.getElementById("error-message").innerText = `Error: ${errorMessage}`;
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if email and password are not empty
    if (email === "" || password === "") {
        errorMessage.innerText = "Please fill in both email and password.";
        return;
    }

    // Firebase code for sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in successfully
            console.log(result);
            document.write("You are Signed In");
            setTimeout(() => {
                window.location.href = "time.html"; // Redirect to time.html after successful sign-in
            }, 2000);
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            document.getElementById("error-message").innerText = `Error: ${errorMessage}`;
        });
}
