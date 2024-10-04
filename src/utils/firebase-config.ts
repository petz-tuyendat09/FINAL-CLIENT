import { initializeApp } from "firebase/app";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC_qQPnKSxvr3A4V2ImyQ-s5UGFtjV8bsY",
  authDomain: "final-chat-3bd1f.firebaseapp.com",
  projectId: "final-chat-3bd1f",
  storageBucket: "final-chat-3bd1f.appspot.com",
  messagingSenderId: "703221461929",
  appId: "1:703221461929:web:9fe39d5eef9ca55f7d4ab8",
  measurementId: "G-Q64J8Q6YZQ", // Optional if not using analytics
};

// Initialize Firebase app
export const fireStoreApp = initializeApp(firebaseConfig);
