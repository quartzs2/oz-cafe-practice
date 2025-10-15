const IMG_WIDTH = 50;

function Item({ item, onClick }) {
  const clickHandler = () => onClick(item);

  return (
    <li className="item" onClick={clickHandler}>
      <img width={IMG_WIDTH} src={item.img} />
      <section>
        <div>{item.name}</div>
        <div>{item.price}원</div>
      </section>
    </li>
  );
}

export default Item;
