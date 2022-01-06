import React from "react"
import ReactDOM from "reactdom"

const date = new Date()
const currentTime=date.getHours()

let greeting

if (currentTime<12){
    greetin="Gmorning"
} else if (currentTime<18){
    greeing = "Gafternoon"
}
else{
    greeting="Gnight"
}


ReactDOM.render9