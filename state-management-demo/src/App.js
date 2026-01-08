/*
- import useState from react
-call useState inside our function with an initial value
- get back two thing in our array
--use array destructurung to unpack those two things
- use them to make our UI intractive

cons[somthing, setSomthing] = useState(initialValue)


*/

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