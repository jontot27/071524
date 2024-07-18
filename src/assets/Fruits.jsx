import Fruit from "./Fruit";

export default function Fruits() {
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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
