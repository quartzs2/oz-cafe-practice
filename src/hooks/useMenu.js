import { useContext } from "react";
import { menuContext } from "../context/menuContext";

export function useMenu() {
  return useContext(menuContext);
}
