//Setting firebase for our chat-app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDFsbNI7hBo3oZHR2oZpsrB_2Gh0BFvZ10",
//   authDomain: "chat-app-46f76.firebaseapp.com",
//   projectId: "chat-app-46f76",
//   storageBucket: "chat-app-46f76.appspot.com",
//   messagingSenderId: "393297397408",
//   appId: "1:393297397408:web:3b02e01c9e425aadf46bc5"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCiR9hSZ1LBsEp4kSNUHSF6e8fq9XsNq98",
  authDomain: "e2e-chat-app-64dbb.firebaseapp.com",
  projectId: "e2e-chat-app-64dbb",
  storageBucket: "e2e-chat-app-64dbb.appspot.com",
  messagingSenderId: "113616124537",
  appId: "1:113616124537:web:05a87f08d1ef2d325532a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {auth, db};