import { createContext, useState } from "react";

export const BlurContext = createContext();
export const BlurProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <BlurContext.Provider>{children}</BlurContext.Provider>
  )
};
