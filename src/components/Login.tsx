import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5iBmmG6QFoetCJ9dClEKIlNCcxcjyezU",
  authDomain: "rajkamalprls-343ca.firebaseapp.com",
  projectId: "rajkamalprls-343ca",
  storageBucket: "rajkamalprls-343ca.appspot.com",
  messagingSenderId: "1037771254894",
  appId: "1:1037771254894:web:eaf0062abaae8235cd4a7f",
  measurementId: "G-VR68H3K99G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}!`);
        console.log("Logged in as:", user.displayName, user.email);
        // TODO: Store user data or redirect
        // window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Login with Google</h2>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
