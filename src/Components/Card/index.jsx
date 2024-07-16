import { useCartContext } from "../../Context/CartProvider";
import { useColorContext } from "../../Context/ColorContext";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../AddToCard";
export const Card = ({ props }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, price, tags, images } = props;

  const { cartState, cartDispatcher } = useCartContext();
  const { colorState } = useColorContext();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    cartDispatcher({ type: "Add", payload: props });
  };
  const handleRemoveToCart = () => {
    cartDispatcher({ type: "Delete", payload: props.id });
  };
  return (
    <div
      className={
        colorState.color === "dark"
          ? "card w-96 shadow-xl m-8"
          : "card bg-pink-100 w-96 shadow-xl m-8"
      }
    >
      <figure>
        <img
          src={images[0]}
          alt="products"
          className="w-full h-64 "
          onClick={() => navigate(`/product/${id}`)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {/* <p>{description}</p> */}
        <div className="card-actions justify-start">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
          <div className="badge badge-secondary ">{price}</div>
        </div>
        <div className="card-actions justify-end">
          <AddToCart product={props} />
        </div>
      </div>
    </div>
  );
};
