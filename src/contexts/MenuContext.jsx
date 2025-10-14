import { createContext, useContext } from 'react';
import data from '@assets/data.js';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const { menu } = data;

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
