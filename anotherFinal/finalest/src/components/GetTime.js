import React from "react"
import App from "../App"

const timeNow = new Date().getHours()
let greeting =""
function GetTime(){
    if(timeNow<12){
       greeting="Gmornin 2 ya"
       return greeting
    
    } else if (timeNow<18){
       greeting="Gdafternoon 2 ya"
       return greeting
    } else { greeting="Gdevenin 2 ya"}
    return greeting
    
    }

    export default GetTime