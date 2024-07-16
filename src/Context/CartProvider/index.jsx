import { useContext, createContext, useReducer } from "react";
import { CartReducer } from "../../Reducers/CartReducer";

// Create the context
const CartContext = createContext();
const initialState = {
  cart: [],
};
const CartProvider = ({ children }) => {
  const [state, cartDispatcher] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ state, cartDispatcher }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
