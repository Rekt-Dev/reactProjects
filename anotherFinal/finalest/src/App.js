import './App.css';
import React from "react"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Form from "./components/Form" 
import LoggedIn from "./components/LoggedIn"
import GetTime from "./components/GetTime"

let isLoggedIn = false
let isUserRegistered = false
let usersArray=[]

GetTime()
console.log(`this is get time function: ${GetTime()}`)


function App() {
  return ( 
    <div className='container'> 
                          {isUserRegistered===true ? 
                          
                          <Login /> 
                          :
                          <Form 
                          
                          /> }
    </div>) 

  }
export default App
 