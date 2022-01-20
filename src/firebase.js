import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Put firebaseConfig from firebase site here


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db };

export default getFirestore();
