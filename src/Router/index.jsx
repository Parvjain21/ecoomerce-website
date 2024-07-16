import { Routes, Route } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { LoginPage } from "../pages/LoginPage";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
