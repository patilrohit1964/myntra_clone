import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyA4NMRjf7I0Kj5_B1hwyqmbwxbWK_K3MnQ",
    authDomain: "myntra-b8df1.firebaseapp.com",
    projectId: "myntra-b8df1",
    storageBucket: "myntra-b8df1.appspot.com",
    messagingSenderId: "791370956217",
    appId: "1:791370956217:web:23d942106f92e44e864a68",
    measurementId: "G-M1H5C5K62J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// // read firestore
const querySnapshot = await getDocs(collection(db, "first_db"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
// getDoc(doc(db,"first_db","MgEXCFausyVt6cKDMFti")).then(data=>{
//     if(data.exists()){
//         console.log(data.data())
//     }else{
//         console.log("No such document!");
//     }
// })