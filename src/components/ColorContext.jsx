import { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [isPurple, setIsPurple] = useState(false);

  const toggleColor = () => {
    setIsPurple((prevValue) => !prevValue);
  };

  return (
    <ColorContext.Provider value={{ isPurple, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
export default ColorContext;