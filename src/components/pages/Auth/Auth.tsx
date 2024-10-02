"use client";

import Login from "./Login/Login";
import AuthVideo from "./AuthVideo";
import { AuthProvider, useAuth } from "./_store/AuthContext"; // Import AuthProvider and useAuth
import SignUp from "./SignUp/SignUp";
import { AnimatePresence } from "framer-motion";
import Verify from "./Verify/Verify";
import AuthModal from "./AuthModal";
import { useEffect } from "react";

export default function Auth() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}

function AuthContent() {
  const {
    isSignUp,
    verifying,
    modalDisplay,
    modalText,
    setModalDisplay,
    setModalText,
  } = useAuth();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (modalDisplay) {
      // Set a timer to close the modal and clear the text after 5 seconds
      timer = setTimeout(() => {
        setModalDisplay(false); // Hide the modal
        setModalText(""); // Clear the modal text
      }, 5000);
    }

    // Cleanup function to clear the timer when the modalDisplay or modalText changes
    return () => clearTimeout(timer);
  }, [modalDisplay, setModalDisplay, setModalText]);

  return (
    <div className="container flex h-screen items-center text-black">
      <AuthVideo />
      <AnimatePresence mode="wait">
        {verifying ? (
          <Verify key="verify" />
        ) : isSignUp ? (
          <SignUp key="signUp" />
        ) : (
          <Login key="login" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modalDisplay && <AuthModal modalText={modalText} />}
      </AnimatePresence>
    </div>
  );
}
