import { useState } from "react";
import { cartContext } from "./cartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <cartContext.Provider value={{ cart, setCart }}>{children}</cartContext.Provider>;
}
