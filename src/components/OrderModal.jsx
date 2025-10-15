import { useState } from "react";
import { useCart } from "@hooks/useCart";
import Option from "@components/Option";
import data from "@assets/data";

function OrderModal({ modalMenu, setModalOn, cart, setCart }) {
  const [options, setOptions] = useState({ 온도: 0, 진하기: 0, 사이즈: 0 });
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const itemOptions = data.options;

  return (
    <>
      {modalMenu ? (
        <section className="modal-backdrop" onClick={() => setModalOn(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-item">
              <img src={modalMenu.img} />
              <div>
                <h3>{modalMenu.name}</h3>
                <div>{modalMenu.description}</div>
              </div>
            </div>
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
            <div className="submit">
              <div>
                <label htmlFor="count">개수</label>
                <input
                  id="count"
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
              </div>
              <button
                onClick={() => {
                  addToCart({ options, quantity, id: modalMenu.id });
                  setModalOn(false);
                }}
              >
                장바구니 넣기
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default OrderModal;
