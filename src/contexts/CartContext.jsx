import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = ({ options, quantity, id }) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { options, quantity, id }];
    });
  };
  const removeFromCart = ({ id }) => setCart((prev) => prev.filter((el) => el.id !== id));

  return <CartContext value={{ cart, addToCart, removeFromCart }}>{children}</CartContext>;
}
