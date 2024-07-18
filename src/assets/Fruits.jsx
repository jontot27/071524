export default function Fruits() {
  //  const fruits = ["Apple", "Banana", "Mango", "Orage", "Pineapple"];

  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 5, emoji: "🍌" },
    { name: "Mango", price: 3, emoji: "🥭" },
    { name: "Orange", price: 4, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.prcie} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
