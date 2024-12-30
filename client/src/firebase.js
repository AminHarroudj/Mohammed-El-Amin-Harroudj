// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZN0Zs2w6WHAACR4r18JQKL5cPTzYf8Fo",
  authDomain: "portfolio-amin-1.firebaseapp.com",
  projectId: "portfolio-amin-1",
  storageBucket: "portfolio-amin-1.firebasestorage.app",
  messagingSenderId: "784043945768",
  appId: "1:784043945768:web:3bbef2c8672dd66f1e6a1d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Export services you need
const db = getFirestore();

//Collection ref
const colRef = collection(db, "project");

//Get collection data
getDocs(colRef).then((snapshot) => {
  let projects = [];
  snapshot.docs.forEach((doc) => {
    projects.push({ ...doc.data(), id: doc.id });
  });
  console.log(projects);
});

export { getDocs };
