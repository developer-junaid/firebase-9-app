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
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBynMGSywbFxEOSxrFZxC6SlB3_Ajsc24w",
  authDomain: "new-firebase-9-app.firebaseapp.com",
  projectId: "new-firebase-9-app",
  storageBucket: "new-firebase-9-app.appspot.com",
  messagingSenderId: "895584093654",
  appId: "1:895584093654:web:58a514273488a75356d077",
};

// * init firebase app
initializeApp(firebaseConfig);

// * init services
const db = getFirestore(); // initialize firestore service
const auth = getAuth(); // Initialize auth service

// * collection ref
const colRef = collection(db, "books"); // collection(database, collectionName)

// * Queries
const q = query(colRef, orderBy("createdAt"));

// * Realtime collection data
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

// * Adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add book
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset(); // Reset the form
  });
});

// * Deleting documents
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

// * Updating documents
const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", updateBookForm.id.value);

  updateDoc(docRef, {
    title: "updated title",
  }).then(() => {
    updateBookForm.reset();
  });
});

// * Signing up users
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created:", cred.user);
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// * Get single doc
const docRef = doc(db, "books", "oS9SHYK9YEg26a4G4tHf");

// Realtime doc data
onSnapshot(docRef, (doc) => {
  // Each time doc changes
  console.log(doc.data(), doc.id);
});
