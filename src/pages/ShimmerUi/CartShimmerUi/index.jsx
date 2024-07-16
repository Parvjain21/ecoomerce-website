import { useNavigate } from "react-router-dom";
export const CartShimmerUi = () => {
  const navigate = useNavigate();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your Cart Is Empty 😊</h1>
          <p className="py-6">Please Add your Favourite Products</p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
