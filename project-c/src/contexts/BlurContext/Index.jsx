import { createContext, useState } from "react";

export const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BlurContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BlurContext.Provider>
  )
}