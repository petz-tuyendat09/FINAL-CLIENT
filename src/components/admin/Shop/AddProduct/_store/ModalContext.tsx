import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  modalText: string;
  setModalText: (value: string) => void;
  modalDisplay: boolean;
  setModalDisplay: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalText, setModalText] = useState(
    "Thêm sản phẩm thành công quay về sau 3s",
  );
  const [modalDisplay, setModalDisplay] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalText,
        setModalText,
        modalDisplay,
        setModalDisplay,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
