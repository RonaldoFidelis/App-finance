import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCQ_PlrZP-U-vkrqGSGnT5M-biMmTmrs_A",
  authDomain: "app-finance-33f60.firebaseapp.com",
  projectId: "app-finance-33f60",
  storageBucket: "app-finance-33f60.appspot.com",
  messagingSenderId: "199612082398",
  appId: "1:199612082398:web:69f710ea75a25b95dffa4f",
  measurementId: "G-TZ2NGP2C80"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);