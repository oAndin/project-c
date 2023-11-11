import { createContext, useState } from "react";

export const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen () {
        setIsOpen(!isOpen)
      }
    

    return (
        <BlurContext.Provider value={{ isOpen, toggleIsOpen }}>
            {children}
        </BlurContext.Provider>
    )
}
