//import {useReducer} from "react";
import useCustomCounter from "./useCustomCounter";

//const initialState = {count:0}

//function reducer (state, action){
//switch (action.type){
//case "increment":
// return {count:state.count + 1}
// case "decrement":
// return {count:state.count - 1}
// case "resetvalue":
// return initialState
//The setvalue here is still set to just + 5, will try to fix it
// case "setvalue":
//    return {count:state.count + 5};
// default:
// throw new Error();
// }
// }

function Counter() {
  const [count, Increment, Decrement, resetValue, setValue] = useCustomCounter(
    0,
    1
  );
  //const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="display-part">{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={setValue}>SetValue</button>
    </div>
  );
}

export default Counter;
