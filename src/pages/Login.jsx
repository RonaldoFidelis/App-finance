import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCQ_PlrZP-U-vkrqGSGnT5M-biMmTmrs_A",
  authDomain: "app-finance-33f60.firebaseapp.com",
  projectId: "app-finance-33f60",
  storageBucket: "app-finance-33f60.appspot.com",
  messagingSenderId: "199612082398",
  appId: "1:199612082398:web:69f710ea75a25b95dffa4f",
  measurementId: "G-TZ2NGP2C80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export function Login() {

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}