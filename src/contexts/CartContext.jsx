import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = ({ options, quantity, id }) =>
    setCart((prev) => [...prev, { options, quantity, id }]);
  const removeFromCart = ({ id }) =>
    setCart((prev) => prev.filter((el) => el.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
