import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

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

// Queries
const q = query(colRef, where("author", "==", "Jamie lanister"));

// Realtime collection data
onSnapshot(q, (snapshot) => {
  // Run everytime a collection "q" changes
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
});

// Adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Data
  const dataToAdd = {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  };

  // Add book
  addDoc(colRef, dataToAdd).then(() => {
    addBookForm.reset(); // Reset the form
  });
});

// Deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value); // Get document reference

  // Delete
  deleteDoc(docRef).then(() => {
    // Reset form
    deleteBookForm.reset();
  });
});
