import { menuContext } from "./menuContext";
import data from "../assets/data";

export const MenuProvider = ({ children }) => {
  const value = { menu: data.menu };
  return <menuContext.Provider value={value}>{children}</menuContext.Provider>;
};
