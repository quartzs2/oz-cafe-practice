import { useMenu } from "@hooks/useMenu";
import { useCart } from "@hooks/useCart";
import CartItem from "@components/CartItem";

function Cart() {
  const { menu } = useMenu();
  const { cart, removeFromCart } = useCart();

  if (!menu) {
    return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;
  }

  const allMenus = [...menu.커피, ...menu.논커피];

  const renderCartItems = () => {
    if (cart.length === 0) {
      return <div className="no-item">장바구니에 담긴 상품이 없어요!</div>;
    }

    return cart.map((el) => {
      const item = allMenus.find((menu) => menu.id === el.id);
      return (
        <CartItem
          key={el.id}
          item={item}
          options={el.options}
          quantity={el.quantity}
          removeFromCart={removeFromCart}
        />
      );
    });
  };

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">{renderCartItems()}</ul>
    </>
  );
}

export default Cart;
