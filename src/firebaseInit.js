import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQUaOlUZFZ5s_JUK3tdHYK79Q8agqz78Q",
  authDomain: "portfolio-8a1dc.firebaseapp.com",
  databaseURL: "https://portfolio-8a1dc-default-rtdb.firebaseio.com",
  projectId: "portfolio-8a1dc",
  storageBucket: "portfolio-8a1dc.appspot.com",
  messagingSenderId: "589485285384",
  appId: "1:589485285384:web:eacd20d7f10348d28e71bd"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;