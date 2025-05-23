import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export const useCart = () => {
  return useContext(cartContext);
};
