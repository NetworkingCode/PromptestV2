// firebase-db.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { firebaseConfig } from "../login/firebaseConfig.js";
//import dotenv from 'dotenv';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//dotenv.config();

export { db };