import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIohvRbzhmuQna4NRUNiW2xkxvsHcc_Cs",
    authDomain: "emaillist-29baa.firebaseapp.com",
    projectId: "emaillist-29baa",
    storageBucket: "emaillist-29baa.appspot.com",
    messagingSenderId: "67580290374",
    appId: "1:67580290374:web:466cf33e7a7b291889b147",
    measurementId: "G-HYJKPRJLEX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);