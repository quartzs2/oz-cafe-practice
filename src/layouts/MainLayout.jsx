import { Outlet } from 'react-router-dom';
import { MenuProvider } from '@contexts/MenuContext';
import { CartProvider } from '../contexts/CartContext';
import Header from '@components/Header';
import '@styles/MainLayout.scss';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <MenuProvider>
          <CartProvider>
            <Outlet />
          </CartProvider>
        </MenuProvider>
      </main>
    </>
  );
}

export default MainLayout;
