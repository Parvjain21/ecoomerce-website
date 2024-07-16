import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { CartProvider } from "./Context/CartProvider";
import { Router } from "./Router";
import { NavBar } from "./Components/NavBar";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      {/* <LoginPage /> */}
    </>
  );
};
export default App;
