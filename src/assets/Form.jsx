import { useState } from "react";
export default function Form() {
  const [firstName, setFirstName] = useState("First Name");
  return (
    <div>
      <form>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
        />
      </form>
    </div>
  );
}
