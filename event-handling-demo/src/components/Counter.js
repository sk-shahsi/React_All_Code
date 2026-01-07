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

    //Method 2: Higher-order function approch

    const creatChangeHandler =
    (amount) => () => {
        return()=>{
        setCount(prevCount => prevCount + amount);
    };
    };

    return(
        <div style={{textAlign:'center',padding:'20px'}}>
            <h2> Counter with custom Amounts</h2>
            <div style={{fontSize:'2rm',margin:'20px', color: count <0?'red':'black'}}>
            Count: {count}
            </div>
            <div style={{marginBottom:'10px'}}>
                <h3>Quick Changes</h3>
                <CounterButton
                onButtonClick={()=>handleChangeBy(1)}
                color ='lightgreen'>+1  </CounterButton>

                <CounterButton
                onButtonClick={()=>handleChangeBy(5)}
                color ='green'>+5  </CounterButton>

                <CounterButton
                onButtonClick={()=>handleChangeBy(10)}
                color ='darkgreen'>+10  </CounterButton>

                <CounterButton
                onButtonClick={()=>handleChangeBy(-1)}
                color ='lightred'>-1  </CounterButton>

                <CounterButton
                onButtonClick={()=>handleChangeBy(-5)}
                color ='red'>-5  </CounterButton>

                <CounterButton
                onButtonClick={()=>handleChangeBy(-10)}
                color ='darkred'>-10  </CounterButton>

                <CounterButton
                onButtonClick={()=>resetCount()}
                color ='gray'>Reset  </CounterButton>


                <CounterButton
                onButtonClick={creatChangeHandler(25)}
                color ='purple'>+25 (HOF)  </CounterButton>
            </div>
        </div>
    )

}
export default Counter;
