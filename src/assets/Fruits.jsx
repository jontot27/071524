export default function Fruits() {
  const fruits = ["Apple", "Banana", "Mango", "Orage", "Pineapple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
