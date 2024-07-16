import { useContext, createContext, useReducer } from "react";
import { LoginReducer } from "../../Reducers/CartReducer/LoginReducer";
const LoginContext = createContext();
const initialParam = {
  user: null,
};
const LoginProvider = ({ children }) => {
  const [state, loginDispatcher] = useReducer(LoginReducer, initialParam);

  return (
    <LoginContext.Provider value={{ state, loginDispatcher }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  return useContext(LoginContext);
};

export { LoginProvider, useLoginContext };
