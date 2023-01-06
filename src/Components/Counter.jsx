
import useCustomCounter from "./useCustomCounter";



function Counter() {
  const [count, Increment, Decrement, resetValue, setValue] = useCustomCounter(
    0,
    1
  );
  
  return (
    <div>
      <div className="display-part">{count}</div>
      <button className="btn-counter" onClick={Increment}>Increment</button>
      <button className="btn-counter"  onClick={Decrement}>Decrement</button>
      <button  className="btn-counter" onClick={resetValue}>Reset</button>
      <button className="btn-counter"  onClick={setValue}>SetValue</button>
    </div>
  );
}

export default Counter;
