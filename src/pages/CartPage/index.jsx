import { TableRow } from "./TableRow";
import { useCartContext } from "../../Context/CartProvider";
import { NavBar } from "../../Components/NavBar";
import { CartShimmerUi } from "../ShimmerUi/CartShimmerUi";
export const CartPage = () => {
  const { state } = useCartContext();

  console.log("cart = ", state);
  if (state.length == 0) {
    return <CartShimmerUi />;
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {state.map((prod, index) => (
              <TableRow key={index} props={prod} />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};
