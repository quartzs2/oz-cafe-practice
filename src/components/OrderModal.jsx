import { useState } from "react";
import { useCart } from "@hooks/useCart";
import Option from "@components/Option";
import data from "@assets/data";
import Modal from "@components/Modal";

const DEFAULT_OPTION_VALUE = 0;
const DEFAULT_QUANTITY = 1;
const MIN_QUANTITY = 1;

function OrderModal({ modalMenu, onClose }) {
  const [options, setOptions] = useState({
    온도: DEFAULT_OPTION_VALUE,
    진하기: DEFAULT_OPTION_VALUE,
    사이즈: DEFAULT_OPTION_VALUE,
  });
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
  const { addToCart } = useCart();
  const itemOptions = data.options;

  const quantityChangeHandler = (event) => setQuantity(Number(event.target.value));

  const addItemToCartHandler = () => {
    addToCart({ options, quantity, id: modalMenu.id });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <section className="modal-item">
        <img src={modalMenu.img} />
        <div>
          <h3>{modalMenu.name}</h3>
          <div>{modalMenu.description}</div>
        </div>
      </section>
      <section>
        <ul className="options">
          {Object.keys(itemOptions).map((el) => (
            <Option
              key={el}
              options={options}
              setOptions={setOptions}
              name={el}
              itemOptions={itemOptions[el]}
            />
          ))}
        </ul>
      </section>
      <section className="submit">
        <div>
          <label htmlFor="count">개수</label>
          <input
            id="count"
            type="number"
            value={quantity}
            min={MIN_QUANTITY}
            onChange={quantityChangeHandler}
          />
        </div>
        <button onClick={addItemToCartHandler}>장바구니 넣기</button>
      </section>
    </Modal>
  );
}

export default OrderModal;
