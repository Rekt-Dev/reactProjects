import './App.css';
import React from "react"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Form from "./components/Form"
import LoggedIn from "./components/LoggedIn"


let isLoggedIn = false
let greeting=""
const timeNow = new Date().getHours()
let isUserRegistered = true

console.log(`this is the time now ${timeNow}`)

function getTime(){
if(timeNow<12){
   greeting="Gmornin 2 ya"
   return greeting

} else if (timeNow<18){
   greeting="Gdafternoon 2 ya"
   return greeting
} else { greeting="Gdevenin 2 ya"}
return greeting

}
getTime()
console.log(getTime())
function showRegistrationPage(){
  if(isUserRegistered===false){
    return <div>
<Form />
      </div>
  } else {
    return <Login />
  }
}
function App() {
  return ( 
    <div className='container'> 

      {isLoggedIn===true ? 
           <LoggedIn /> : <Form />}

    </div>) 

  }
export default App;
