
import {useReducer} from "react";

const initialState = {count:0}

function reducer (state, action){
    switch (action.type){
        case "increment":
            return {count:state.count + 1}
            case "decrement":
                return {count:state.count - 1}
                case "resetvalue":
                    return initialState
                    //The setvalue here is still set to just + 5, will try to fix it
                    case "setvalue":
                        return {count:state.count + 5};
                    default:
                        throw new Error();
    }
}






function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div className = "display-part">
            {state.count}
            </div>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"resetvalue"})}>Reset</button>
            <button onClick={()=>dispatch({type:"setvalue"})}>SetValue</button>
        </div>
    )
}

export default Counter;