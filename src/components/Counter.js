import React,{useState} from "react";
function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div>
            <h2> Welcome to counter program</h2>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>)
}

export default Counter;
