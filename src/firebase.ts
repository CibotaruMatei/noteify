import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const Firebase = initializeApp(firebaseConfig)

export const Providers = {
    google: new GoogleAuthProvider(),
    email: new EmailAuthProvider()
}

export const auth = getAuth(Firebase)
export default Firebase