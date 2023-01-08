import useCustomCounter from "./useCustomCounter"


function ErrorBoundary() {
   const [count, Increment, Decrement, resetValue, setValue] = useCustomCounter(
    0,
    1
  );
  
  if (count  === 10){
    throw new Error ('Count should not exceed the number 10, refresh page')
  }
  return (
    <div >
      <h1> Error Boundary Page</h1>
      <h4>The counter should not exceed the number 10</h4>

    <div>
      <div className="display-part">{count}</div>
      <button className="btn-counter" onClick={Increment}>Increment</button>
      <button className="btn-counter"  onClick={Decrement}>Decrement</button>
      <button  className="btn-counter" onClick={resetValue}>Reset</button>
      <button className="btn-counter"  onClick={setValue}>SetValue</button>
    </div>
      
  
    </div>
  );
}

export default ErrorBoundary;
