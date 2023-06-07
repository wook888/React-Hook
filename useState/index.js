import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>My App</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
