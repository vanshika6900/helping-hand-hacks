import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-yl9frjLVkWQUijqq4olPQIdBhnkAZtI",
  authDomain: "helping-hands-6c227.firebaseapp.com",
  projectId: "helping-hands-6c227",
  storageBucket: "helping-hands-6c227.appspot.com",
  messagingSenderId: "493330444812",
  appId: "1:493330444812:web:6009348e19b6fa27517429"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig) , db = getDatabase(app);