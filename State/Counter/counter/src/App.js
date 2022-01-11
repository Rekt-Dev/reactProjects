import './App.css';
import "./index.css"
import React, {useState} from "react"


function App() {

  function Increase(){
    console.log(count)
    setCount(count+1)  
    return count
  }
  
  function Decrease(){
    console.log(count)
setCount(count-1)
   return count
  }
  const [count, setCount] = useState(0)

  console.log(`this is usest8: ${useState}`)
  console.log(`this is st8 ${count}`)

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
