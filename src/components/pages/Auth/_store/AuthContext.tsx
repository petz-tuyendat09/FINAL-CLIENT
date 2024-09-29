import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isSignUp: boolean;
  setSignUp: (value: boolean) => void;
  verifying: boolean;
  setVerifying: (value: boolean) => void;
  email: string;
  setEmail: (value: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignUp, setSignUp] = useState(false);
  const [verifying, setVerifying] = useState(false); // State for verifying process
  const [email, setEmail] = useState(""); // State for verifying process

  return (
    <AuthContext.Provider
      value={{ isSignUp, setSignUp, verifying, setVerifying, email, setEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
