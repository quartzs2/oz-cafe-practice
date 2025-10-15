import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import "@styles/MainLayout.scss";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
