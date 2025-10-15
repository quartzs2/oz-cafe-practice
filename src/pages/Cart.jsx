import { useMenu } from "@hooks/useMenu";
import { useCart } from "@hooks/useCart";
import CartItem from "@components/CartItem";

function Cart() {
  const { menu } = useMenu();
  const { cart, removeFromCart } = useCart();

  if (!menu) return <div style={{ textAlign: "center", margin: "80px" }}>메뉴 정보가 없어요!</div>;
  const allMenus = [...menu.커피, ...menu.논커피];
  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart?.length ? (
          cart.map((el) => (
            <CartItem
              key={el.id}
              item={allMenus.find((menu) => menu.id === el.id)}
              options={el.options}
              quantity={el.quantity}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
    </>
  );
}

export default Cart;
