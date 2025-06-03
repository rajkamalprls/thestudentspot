// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5iBmmG6QFoetCJ9dClEKIlNCcxcjyezU",
  authDomain: "rajkamalprls-343ca.firebaseapp.com",
  projectId: "rajkamalprls-343ca",
  storageBucket: "rajkamalprls-343ca.appspot.com",
  messagingSenderId: "1037771254894",
  appId: "1:1037771254894:web:eaf0062abaae8235cd4a7f",
  measurementId: "G-VR68H3K99G",
};

// ✅ Initialize Firebase once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
