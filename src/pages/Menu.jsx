import { useState } from "react";
import { useMenu } from "@hooks/useMenu";
import Item from "@components/Item";
import OrderModal from "@components/OrderModal";

function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const { menu } = useMenu();

  if (!menu) {
    return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;
  }

  const categories = Object.keys(menu);
  const handleClick = (item) => {
    setModalMenu(item);
    setIsModalOpen(true);
  };

  return (
    <>
      {categories.map((category) => {
        const categoryMenu = menu[category];

        return (
          <Category
            key={category}
            category={category}
            categoryMenu={categoryMenu}
            onClick={handleClick}
          />
        );
      })}
      {isModalOpen && <OrderModal modalMenu={modalMenu} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function Category({ category, categoryMenu, onClick }) {
  return (
    <section key={category}>
      <h2>{category}</h2>
      <ul className="menu">
        {categoryMenu.map((item) => (
          <Item key={item.name} item={item} onClick={onClick} />
        ))}
      </ul>
    </section>
  );
}

export default Menu;
