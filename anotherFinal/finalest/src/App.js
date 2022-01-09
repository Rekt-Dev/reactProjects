import './App.css';
import React from "react"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Form from "./components/Form"
import LoggedIn from "./components/LoggedIn"
import GetTime from "./components/GetTime"

let isLoggedIn = false
let greeting=""

let isUserRegistered = true



GetTime()
console.log(`this is get time function: ${GetTime()}`)
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
export default {App,greeting};
 