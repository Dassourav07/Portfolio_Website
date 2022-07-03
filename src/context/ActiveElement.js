import { createContext, useState } from "react";

export const ActiveElementContext = createContext();

export const ActiveElementContextProvider = ({ children }) => {
  const [activeElement, setActiveElement] = useState("header");

  const handleActiveElement = (value) => {
    setActiveElement(value);
  };

  return (
    <ActiveElementContext.Provider
      value={{ activeElement, handleActiveElement }}
    >
      {children}
    </ActiveElementContext.Provider>
  );
};
