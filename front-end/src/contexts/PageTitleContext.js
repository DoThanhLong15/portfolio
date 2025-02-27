import { createContext, useContext, useEffect, useState } from "react";

const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Home");

  console.log(title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (  
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => useContext(TitleContext);
