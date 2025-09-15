import React, { useCallback, useState } from "react";

const App = (props: { greet: string }) => {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);
  
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);
  return (
    <>
      <h1>{props.greet}</h1>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default App;
