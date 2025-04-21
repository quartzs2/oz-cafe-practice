import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useMenu } from "./hooks/useMenu";
import { useCart } from "./hooks/useCart";

function App() {
  const { menu } = useMenu();
  const { cart, setCart } = useCart();
  console.log(cart);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu menu={menu} cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart menu={menu} cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
