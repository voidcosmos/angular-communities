const firebase = require("firebase");
const {Storage} = require('@google-cloud/storage');
require("firebase/firestore");
const communitySchema = require('../src/assets/json/communities.json');

// Config and Credentials of Firebase and Storage
const firebaseConfig = {
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: ""
}
const storageConfig = {
    // projectId: "",
    // keyFilename: ""
}
const googleStoragePath = "https://storage.googleapis.com/angular-communities-9785d.appspot.com"


if(!('apiKey' in firebaseConfig && 'projectId' in storageConfig)){
    throw("\nFirebase or Storage credentials are empty. Set them at ./load-communities-to-firebase.js\n")
}

const storage = new Storage(storageConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const bucketName = "angular-communities-9785d.appspot.com"
const communityIds = Object.keys(communitySchema)
const imageTypes = [
    "lg.png",
    "lg.webp",
    "md.png",
    "md.webp",
    "sm.png",
    "sm.webp",
    "traced.svg",
    "xl.png",
    "xl.webp",
    "xs.png",
    "xs.webp"
]
const imagesPath = "src/assets/images";

async function uploadCommunities(){
    // Remove first key ($schema), following are Communities
    communityIds.shift();

    for(let index = 0; index < communityIds.length; index++){
        const docRef = await db.collection("communities-test").add({...communitySchema[communityIds[index]], images: []});
        let imageUrls = [];
        for(let imageTypeIndex = 0; imageTypeIndex < imageTypes.length; imageTypeIndex++){
            let originalFileName = `${communitySchema[communityIds[index]].id}_${imageTypes[imageTypeIndex]}`;
            let fileName = `community_${originalFileName}`;
            imageUrls.push(`${googleStoragePath}/${docRef.id}/${fileName}`)
            await storage.bucket(bucketName).upload(`${imagesPath}/${originalFileName}`,{
                destination: `${docRef.id}/${fileName}`
            })
        }
        await docRef.update({images: imageUrls})

        console.log(`Comunidad creada (${index}/${communityIds.length}):  ${docRef.id}`);
    }
}
uploadCommunities().catch(console.error);