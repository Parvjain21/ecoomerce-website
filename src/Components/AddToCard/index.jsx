import { useState, useEffect } from "react";
import { useCartContext } from "../../Context/CartProvider";
export const AddToCart = ({ product }) => {
  const { state, cartDispatcher } = useCartContext();
  const [presentInCart, setPresentInCart] = useState(false);
  const productPresent = state.find((prod) => prod.id == product.id);
  useEffect(() => {
    if (productPresent == undefined) {
      setPresentInCart(false);
    } else {
      setPresentInCart(true);
    }
  }, [productPresent]);

  if (presentInCart == false) {
    return (
      <button
        onClick={() => cartDispatcher({ type: "Add", payload: product })}
        className="btn btn-primary"
      >
        Add To Cart
      </button>
    );
  } else {
    return (
      <div className={"flex"}>
        <button
          onClick={() => cartDispatcher({ type: "Add", payload: product })}
          className="btn btn-ghost btn-xs"
        >
          ▲
        </button>
        <label className="btn btn-white  btn-xs">
          {productPresent && productPresent.quantity}
        </label>
        <button
          onClick={() =>
            cartDispatcher({ type: "Delete", payload: product.id })
          }
          className="btn btn-ghost btn-xs"
        >
          ▼
        </button>
      </div>
    );
  }
};
