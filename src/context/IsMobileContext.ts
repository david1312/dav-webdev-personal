import { createContext, useContext } from "react";

const IsMobileContext = createContext<boolean>(false);

export const useIsMobileContext = () => useContext(IsMobileContext);
