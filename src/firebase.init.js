// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs_nmTnY-BPs54-ALNNEA3sFP78cbPmdU",
  authDomain: "genius-car-services-69087.firebaseapp.com",
  projectId: "genius-car-services-69087",
  storageBucket: "genius-car-services-69087.appspot.com",
  messagingSenderId: "1030475619044",
  appId: "1:1030475619044:web:107fa0f7b6a176b4b6eaf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;