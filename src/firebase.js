import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO7a6Iajfy4YyzvPesMeTeMOv_2lAheJQ",
  authDomain: "library-management-57d02.firebaseapp.com",
  projectId: "library-management-57d02",
  storageBucket: "library-management-57d02.appspot.com",
  messagingSenderId: "758415073318",
  appId: "1:758415073318:web:43dca1119e24adf96a06e7",
  measurementId: "G-03SN6FZZPL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
