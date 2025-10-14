function Option({ name, options, setOptions, itemOptions }) {
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
              onChange={() => setOptions({ ...options, [name]: idx })}
            />
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Option;
