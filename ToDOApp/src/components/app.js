import React, {useState} from "react";

function App() {

const[inputText, setInputText]=useState("")
const[items, setItems]=useState([])
let array=[]

function handleChange(event){
  const newValue=event.target.value
  setInputText(newValue)
  console.log(items)
    console.log(inputText)
    console.log(array)

}

function handleClick(){
console.log(array)
}

function addItem(){

  setItems((prevItems) => 
    [...prevItems, inputText]
  )
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText}type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem} </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
