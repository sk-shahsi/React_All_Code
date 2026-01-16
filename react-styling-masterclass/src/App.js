import React from "react";
import '/.App.css';
import ProfileCard from "./components/Profile.Card";


function App(){

  return(
    <div className="App">
      <header class="App-header">
        <h1>React Styling Masterclass</h1>
        <p>Building Beautyful component</p>
      </header>
      <main className="main-content"></main>
      <ProfileCard/>

    </div>
  )

}
export default App;