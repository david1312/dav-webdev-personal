import { createContext, useContext, ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface IsMobileContextType {
  isMobile: boolean;
}

// Set the default value to false
const IsMobileContext = createContext<IsMobileContextType>({ isMobile: false });

export const IsMobileProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile(); // Use your existing hook to determine isMobile

  return (
    <IsMobileContext.Provider value={{ isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
};

export const useIsMobileContext = () => {
  const context = useContext(IsMobileContext);
  if (!context) {
    throw new Error(
      "useIsMobileContext must be used within an IsMobileProvider"
    );
  }
  return context;
};
