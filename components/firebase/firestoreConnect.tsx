import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjCrk3lR0UgJWv_gvKGZNQPlT2T6fnxnQ",
    authDomain: "medical-report62.firebaseapp.com",
    projectId: "medical-report62",
    storageBucket: "medical-report62.appspot.com",
    messagingSenderId: "303078234300",
    appId: "1:303078234300:web:51ca38096f158e4d96d8b9"
  };
  
export const dbConnect = () =>{ 
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // console.log(db);
    return db;
}