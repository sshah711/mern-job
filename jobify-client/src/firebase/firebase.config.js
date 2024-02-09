// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfiA4oz_OO5YJHWJNIfCHR5fIMMVRbLa0",
  authDomain: "jobify-b45bb.firebaseapp.com",
  projectId: "jobify-b45bb",
  storageBucket: "jobify-b45bb.appspot.com",
  messagingSenderId: "215358192094",
  appId: "1:215358192094:web:170e8bcf8a4937b794454f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app