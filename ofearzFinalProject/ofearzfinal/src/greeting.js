import React from "react"
import ReactDom from "react-dom"

let date=new Date()
let currentTime=date.getHours()
let greeting
const customStyle={
  color:"pink",
  fontSize:"36px",
  border:"40px solid black",
  backgroundcolor:" white"
}

function greet(){
if(currentTime<12){
    greeting="gutn morgen";
    customStyle.color="yellow"
  
  }else if(currentTime<18){
    greeting="Gafternoon"
    customStyle.color="green"
  
  } else{
    greeting="gut nacht ";
    customStyle.color="blue"
  }
}

export default greeting
export {customStyle,greet}