import React, { useState } from "react";

function MyComponent() {
  // count라는 상태값과 setCount라는 상태를 갱신하는 함수를 가져옴
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
