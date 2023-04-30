import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA7a1SpIqVT76RALp4O5gMDZfvMfAVVTY",
  authDomain: "react-auth-1e1aa.firebaseapp.com",
  projectId: "react-auth-1e1aa",
  storageBucket: "react-auth-1e1aa.appspot.com",
  messagingSenderId: "308696727945",
  appId: "1:308696727945:web:d65125180a74ac149ca158",
  measurementId: "G-RGTSHJWRNG",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
