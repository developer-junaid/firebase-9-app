import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBynMGSywbFxEOSxrFZxC6SlB3_Ajsc24w",
  authDomain: "new-firebase-9-app.firebaseapp.com",
  projectId: "new-firebase-9-app",
  storageBucket: "new-firebase-9-app.appspot.com",
  messagingSenderId: "895584093654",
  appId: "1:895584093654:web:58a514273488a75356d077",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore(); // initialize firestore service

// collection ref
const colRef = collection(db, "books"); // collection(database, collectionName)

// Get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];

    // Get data we want
    snapshot.docs.forEach((doc) => {
      // Save data in array
      books.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log("data", books);
  })
  .catch((err) => {
    console.log(err);
  });
