import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", status: true },
    { name: "Banana", price: 5, emoji: "🍌", status: true },
    { name: "Mango", price: 3, emoji: "🥭", status: false },
    { name: "Orange", price: 4, emoji: "🍊", status: true },
    { name: "Pineapple", price: 8, emoji: "🍍", status: false },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            status={fruit.status}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
