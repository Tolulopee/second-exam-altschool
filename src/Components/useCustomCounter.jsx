import { useState } from "react";

function useCustomCounter(val, step) {
  const [count, setCount] = useState(val);

  function Increment() {
    setCount(count + step);
  }

  function Decrement() {
    setCount(count - step);
  }

  function resetValue() {
    setCount(0);
  }

  
  return [count, Increment, Decrement, resetValue];
}

export default useCustomCounter;
