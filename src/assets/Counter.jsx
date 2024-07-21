import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function addClick() {
    setCount(count + 1);
  }
  function subClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count value is:{count}</h1>
      <button onClick={addClick}>Add</button>
      <button onClick={subClick}>Subtract</button>
    </div>
  );
}
