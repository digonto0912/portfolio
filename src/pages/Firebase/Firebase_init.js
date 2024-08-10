import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "./Config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
