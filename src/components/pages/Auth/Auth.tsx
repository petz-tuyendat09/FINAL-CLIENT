"use client";
import Login from "./Login/Login";
import AuthVideo from "./AuthVideo";
import { AuthProvider, useAuth } from "./_store/AuthContext"; // Import AuthProvider and useAuth
import SignUp from "./SignUp/SignUp";
import { AnimatePresence } from "framer-motion";
import Verify from "./Verify/Verify";
import NoActionModal from "../../ui/NoActionModal";
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
      timer = setTimeout(() => {
        setModalDisplay(false); // Hide the modal
        setModalText("");
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [modalDisplay, setModalDisplay, setModalText]);

  return (
    <div className="container relative z-50 flex h-screen items-center text-black">
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
        {modalDisplay && <NoActionModal modalText={modalText} />}
      </AnimatePresence>
    </div>
  );
}
