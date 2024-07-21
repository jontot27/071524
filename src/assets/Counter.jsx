import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  function addClick() {
    setCount(count + number);
  }
  function subClick() {
    setCount(count - number);
  }
  function toAdd() {
    setNumber(number + 1);
  }
  function toSub() {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>Count value is:{count}</h1>
      <button onClick={addClick}>+</button>
      <button onClick={subClick}>-</button>

      <h1>Added/Subrated Value:{number}</h1>
      <button onClick={toAdd}>Value to be Added</button>
      <button onClick={toSub}>Value to be Subtracted</button>
    </div>
  );
}
