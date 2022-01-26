import React, { useState } from "react";

function App() {

  function treatChange(){
      console.log("treatChange activated")
  }
const [name, setName] = useState("bruh")

  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input onChange={treatChange}
      type="text" 
      placeholder="What's your name ?" 
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
