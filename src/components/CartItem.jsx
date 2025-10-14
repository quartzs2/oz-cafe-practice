import data from '@assets/data';

function CartItem({ item, options, quantity, removeFromCart }) {
  const menuOptions = data.options;

  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {Object.keys(options).map((el) => (
          <div key={el}>
            {el} : {menuOptions[el][options[el]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button
        className="cart-item-delete"
        onClick={() => removeFromCart({ id: item.id })}
      >
        삭제
      </button>
    </li>
  );
}

export default CartItem;
