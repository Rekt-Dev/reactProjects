
import React from "react"



function ToDoItem(props){

  console.log(props.onChecked)
  return(
    <div onClick={props.onChecked()}>
   <li>{props.text}</li>
  </div>
  )
}



export default ToDoItem



