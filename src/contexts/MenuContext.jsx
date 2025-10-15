import { createContext } from "react";
import data from "@assets/data.js";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const { menu } = data;

  return <MenuContext value={{ menu }}>{children}</MenuContext>;
}
