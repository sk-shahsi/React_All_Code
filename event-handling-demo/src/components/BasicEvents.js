import React from "react";


function BasicEvents(){

    const handleClick = () => {
        alert("Butten was clicked!");
    };

    const handeleMouseEnter = () => {
        console.log("Mouse entered the button!!.");
    };
    const handleMouseLeave = () => {
        console.log("Mouse left the button!!.");    
    };

    const handleInputChange = (event) => {
        console.log("Input changed: ", event.target.value);
    };



    return(
        <div>
            <h2>Multiple Event Handling</h2>
            <button onClick={handleClick}
            onMouseEnter={handeleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Hover and Click Me!</button>

            <br/><br/>
            <input type="text" placeholder="Type something and watch the console....."
            onChange={handleInputChange}
            />
        </div>
    )
}
export default BasicEvents;