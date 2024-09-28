import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkKOKSZxgRShyCZugwpnm-Y2e5iaweHdI",
  authDomain: "assignment-f101c.firebaseapp.com",
  projectId: "assignment-f101c",
  storageBucket: "assignment-f101c.appspot.com",
  messagingSenderId: "452314816707",
  appId: "1:452314816707:web:ae4ec45dd2dee65190c276",
  measurementId: "G-8BJXRZGZGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);