import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isSignUp: boolean;
  setSignUp: (value: boolean) => void;
  verifying: boolean;
  setVerifying: (value: boolean) => void;
  email: string;
  setEmail: (value: string) => void;
  modalText: string;
  setModalText: (value: string) => void;
  modalDisplay: boolean;
  setModalDisplay: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignUp, setSignUp] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [email, setEmail] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isSignUp,
        setSignUp,
        verifying,
        setVerifying,
        email,
        setEmail,
        modalText,
        setModalText,
        modalDisplay,
        setModalDisplay,
      }}
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
