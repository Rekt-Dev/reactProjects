import './App.css';
import "./index.css"
import React, {useState} from "react"


function App() {

  function Increase(){
    setCount(count+1)  
    return count
  }
  
  function Decrease(){
setCount(count-1)
   return count
  }
  const [count, setCount] = useState(0)



  return (
    <div className="div">

    <h1>its a simple counter.</h1> 
    <button onClick={Increase}>increase</button> 
    {console.log(count)}
    <button onClick={Decrease}>decrease</button>
    <h1>{count}</h1>

    </div>
  );
}

export default App;
