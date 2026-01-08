import React from "react";


function App(){
  console.log("App component rendered");

  return(
    <div>
      <h1>My Task App</h1>
      <p>Current Time:{new Date().toLocaleTimeString()}</p>
    </div>
  );
}
export default App;