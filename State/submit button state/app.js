import React, {useState} from "react";


function App() {


  const [headingText, setHeadingText] = useState("Sup?")
const [isMousedOver, setMouseOver]= useState(false)
  
  function handleClick(){
    setHeadingText("subfknmitted")
  }
    function dealMouseOver(){
      setMouseOver(true)
    }
  
    function dealMouseOut(){
      setMouseOver(false)
    }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMousedOver ? "black" : "white" }}onClick={handleClick} onMouseOver={dealMouseOver} onMouseOut={dealMouseOut}>Submit</button>
    </div>
  );
}

export default App;
