import { useContext, createContext, useReducer, useEffect } from "react";
import { ColorReducer } from "../../Reducers/ColorReducer";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colorState, colorDispatcher] = useReducer(ColorReducer, {
    color: localStorage.getItem("color") || "light",
  });

  useEffect(() => {
    localStorage.setItem("color", colorState.color);
    applyTheme(colorState.color);
  }, [colorState.color]);

  const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
  };

  return (
    <ColorContext.Provider value={{ colorState, colorDispatcher }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColorContext = () => {
  return useContext(ColorContext);
};

export { ColorProvider, useColorContext };
