import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDXIbAGQddQqu2k-hN3V5X2H--_VrWx0gU",
  authDomain: "chat-auth-bb4d3.firebaseapp.com",
  projectId: "chat-auth-bb4d3",
  storageBucket: "chat-auth-bb4d3.appspot.com",
  messagingSenderId: "568642107231",
  appId: "1:568642107231:web:1ef42fb2a8efb7c3d768ea"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);