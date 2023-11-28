// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn8C2rFXflGUjhsWcbNvO7Ua7Gz6cniqA",
  authDomain: "assets-management-system-7129a.firebaseapp.com",
  projectId: "assets-management-system-7129a",
  storageBucket: "assets-management-system-7129a.appspot.com",
  messagingSenderId: "304683154325",
  appId: "1:304683154325:web:c4f3ee45508bb5e625149c",
  measurementId: "G-51NVB2DQ0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;