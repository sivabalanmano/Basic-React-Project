export default function Suggesion({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li style={{cursor:'pointer'}} onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
