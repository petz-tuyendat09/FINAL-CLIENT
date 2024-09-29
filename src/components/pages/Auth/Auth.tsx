"use client";

import "./auth.css";
import Login from "./Login/Login";
import AuthVideo from "./AuthVideo";
import { AuthProvider, useAuth } from "./_store/AuthContext"; // Import AuthProvider and useAuth
import SignUp from "./SignUp/SignUp";
import { AnimatePresence } from "framer-motion";
import Verify from "./Verify/Verify";

export default function Auth() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}

function AuthContent() {
  const { isSignUp, verifying } = useAuth(); // State from AuthContext

  console.log(verifying);

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
    </div>
  );
}
