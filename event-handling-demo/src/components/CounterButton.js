import React from "react";
function CounterButton({onButtonClick, children, color="blue"})
{
return(
    <button 
    onClick={onButtonClick}
    style={{backgroundColor:color, color:'white', padding:'10px', border:'none', borderRadius:'5px', cursor:'pointer',margin:'5px',fontWeight:'bold'}}
    >
        {children}
    </button>
)


}
export default CounterButton;
    //