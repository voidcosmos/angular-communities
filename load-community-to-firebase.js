const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: ""
}

if(!('apiKey' in firebaseConfig)){
    throw("\nFirebase credentials are empty. Set them at ./load-communities-to-firebase.js\n")
}
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();


db.collection("communities-test").add({
    name: "Prueba para Borrar",
    position: {
        lat: 1.234567,
        lng: 1.234567
    },
    city: "",
    twitter: "",
    web: "",
    youtube: "",
    description: "",
    organizers: [
        {
            name: "",
            twitter: "",
            github: ""
        }
    ]
}).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})