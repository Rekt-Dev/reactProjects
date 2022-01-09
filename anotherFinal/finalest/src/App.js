import './App.css';
import React from "react"
import Login from "./components/Login"
let isLoggedIn = true
let greeting=""
const timeNow = new Date().getHours()

console.log(`this is the time now ${timeNow}`)

function getTime(){
if(timeNow<12){
   greeting="Gmornin 2 ya"
} else if (timeNow<18){
   greeting="Gdafternoon 2 ya"
} else { greeting="Gdevenin 2 ya"}
}
getTime()

function App() {
  return ( 
    <div className='container'>
      {isLoggedIn===true ? 
           <div>
             
             <h1>Sup sire/maam ? U r logged in. </h1>
              <h1>{greeting}</h1>

           </div>:<Login />}

    </div>) 

  }
export default App;
