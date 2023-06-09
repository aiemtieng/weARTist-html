//set firebaseของเว็บไซต์เรา
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMEkVjZVciH_4nsZXPXXaDAKIoQP-2u9Q",
    authDomain: "weartist-5baae.firebaseapp.com",
    projectId: "weartist-5baae",
    storageBucket: "weartist-5baae.appspot.com",
    messagingSenderId: "259931504999",
    appId: "1:259931504999:web:6669bc692abb2345f1afc2" });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//Sign up function
const signUp=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
        // Signed in 
        window.location.href = "signIn.html";
        console.log(result)
        // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        // ..
    });
}

//Login function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "weARTist1.html";
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}