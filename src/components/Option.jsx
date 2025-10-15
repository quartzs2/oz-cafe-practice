function Option({ name, options, setOptions, itemOptions }) {
  const onChangeHandler = (event) =>
    setOptions((prev) => ({ ...prev, [name]: event.target.value }));

  return (
    <li className="option">
      {name}
      <ul>
        {itemOptions.map((option, idx) => (
          <li key={option}>
            <input
              type="radio"
              name={name}
              checked={options[name] === idx}
              onChange={onChangeHandler}
            />
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Option;
