import { AddToCart } from "../../../Components/AddToCard";
import { useCartContext } from "../../../Context/CartProvider";
import { useNavigate } from "react-router-dom";
export const TableRow = ({ props }) => {
  const { id, title, quantity, price, thumbnail, description } = props;
  const { cartDispatcher } = useCartContext();
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={`${title} image`} />
            </div>
          </div>
          <div onClick={() => navigate(`/product/${id}`)}>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{description}</div>
          </div>
        </div>
      </td>

      <td>{price}</td>
      <th>
        {/* <div className={"flex"}>
          <button
            onClick={() => cartDispatcher({ type: "Add", payload: props })}
            className="btn btn-ghost btn-xs"
          >
            ▲
          </button>
          <label className="btn btn-ghost btn-xs">{quantity}</label>
          <button
            onClick={() => cartDispatcher({ type: "Delete", payload: id })}
            className="btn btn-ghost btn-xs"
          >
            ▼
          </button>
        </div> */}
        <AddToCart product={props} />
      </th>
      <td>{(price * quantity).toFixed(2)}</td>
    </tr>
  );
};
