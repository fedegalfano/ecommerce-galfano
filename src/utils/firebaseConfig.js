// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
import { collection, getDocs, query } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBfXYyG5eXl0keG8FRyY4zVG4c8BDSA0o",
  authDomain: "ecommerce-galfano.firebaseapp.com",
  projectId: "ecommerce-galfano",
  storageBucket: "ecommerce-galfano.appspot.com",
  messagingSenderId: "396558656916",
  appId: "1:396558656916:web:4860307e83ee336d031b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (categoriaId) => {
    let q;
    if (categoriaId) {
       q = query(collection(db, "products", where('category', '==', categoriaId)));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}