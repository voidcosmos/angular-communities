const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

var communitySchema = require('./src/assets/json/communities.json');

// Initialize Cloud Firestore through Firebase

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

firebase.initializeApp(firebaseConfig);

  
var db = firebase.firestore();

var communities = Object.keys(communitySchema)

// Remove first key ($schema), following are Communities
communities.shift();
communities.forEach(community => {
    db.collection("communities-test").add(communitySchema[community]).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
})