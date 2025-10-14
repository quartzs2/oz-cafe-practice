import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '@pages/Menu';
import Cart from '@pages/Cart';
import MainLayout from '@layouts/MainLayout';
import '@styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
