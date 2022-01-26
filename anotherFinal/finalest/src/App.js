import './App.css';
import React from "react"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Form from "./components/Form"  
import LoggedIn from "./components/LoggedIn"
import GetTime from "./components/GetTime"
import styles from "./styles.css"

let isLoggedIn = false
let isUserRegistered = false
let usersArray=[{ofear:"browtaf"}, {david:"sirstehp"}]

GetTime()
console.log(`this is get time function: ${GetTime()}`)

//function 

function App() {
  return (<div className='container'> 
                          <Form 
                          isRegistered={isUserRegistered}
                          /> 
                              {isLoggedIn===true  && <LoggedIn />  
                                         
                              } </div>)}


  
export default App
export {isUserRegistered}