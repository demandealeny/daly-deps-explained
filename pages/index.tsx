import { useEffect, useState, useCallback } from "react";

console.clear();

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>
      <ul>
        <li>
          <span>Current count: {count}</span>
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="counter">
      <Counter />
    </div>
  );
}
