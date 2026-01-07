import React,{useState} from "react";

function Counter(){

    //state to store our current count

    const [count, setCount] = useState(0);
    //function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    //function to decrement count
    const decrementCount = () => {
        setCount(count - 1);
    };
    //function to reset count
    const resetCount = () => {
        setCount(0);
    };

    return(
        <div style={{textAlign:'center',padding:'20px'}}>
            <h2>Intractive Counter</h2>
            <div style={{fontSize:'2rm',margin:'20px'}}>
            Count: {count}
            </div>
            <div>
                <button onClick={incrementCount} style={{margin:'5px'}}>+Increment</button>
                <button onClick={decrementCount} style={{margin:'5px'}}>-Decrement</button>
                <button onClick={resetCount} style={{margin:'5px'}}>0Reset</button>
            </div>
        </div>
    )

}
export default Counter;
