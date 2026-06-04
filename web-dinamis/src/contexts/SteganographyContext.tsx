"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SteganographyContextType = {
  encryptedText: string;
  setEncryptedText: (text: string) => void;
  isValidQR: boolean;
  setIsValidQR: (valid: boolean) => void;
};

const SteganographyContext = createContext<SteganographyContextType | undefined>(undefined);

export function SteganographyProvider({ children }: { children: ReactNode }) {
  const [encryptedText, setEncryptedText] = useState("");
  const [isValidQR, setIsValidQR] = useState(false);

  return (
    <SteganographyContext.Provider value={{ encryptedText, setEncryptedText, isValidQR, setIsValidQR }}>
      {children}
    </SteganographyContext.Provider>
  );
}

export function useSteganography() {
  const context = useContext(SteganographyContext);
  if (!context) {
    throw new Error("useSteganography must be used within a SteganographyProvider");
  }
  return context;
}
