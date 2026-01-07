import React,{useState} from "react";
import CounterButton from "./CounterButton";

function Counter(){

    //state to store our current count

    const [count, setCount] = useState(0);
    //function to increment count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    //function to decrement count
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };
    //function to reset count
    const resetCount = () => {
        setCount(0);
    };

    //Method 1: Function that accepts diffrent amounts
    const handleChangeBy = (amount) => {
        setCount(prevCount => prevCount + amount);
    };

    return(
        <div style={{textAlign:'center',padding:'20px'}}>
            <h2>Intractive Counter</h2>
            <div style={{fontSize:'2rm',margin:'20px'}}>
            Count: {count}
            </div>
            <div>
                <CounterButton onButtonClick={incrementCount} color="yellow" style={{margin:'5px'}}>+Increment</CounterButton>
                <CounterButton onButtonClick={decrementCount} color="red" style={{margin:'5px'}}>-Decrement</CounterButton>
                <CounterButton onButtonClick={resetCount} color="blue" style={{margin:'5px'}}>Reset</CounterButton>
                <CounterButton onButtonClick={() => setCount(100)} color="purple" style={{margin:'5px'}}>Set to 100</CounterButton>
                <CounterButton onButtonClick={() => setCount(prevCount=> prevCount*2)} color="green" style={{margin:'5px'}}>Set to Double</CounterButton>
            </div>
        </div>
    )

}
export default Counter;
