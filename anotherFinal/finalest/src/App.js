import './App.css';
import React from "react"
import Login from "./components/Login"
let isLoggedIn = false




function App() {
  return (
    <div className='container'>
      {isLoggedIn===true ? <h1>Sup sire/maam ? U r logged in. </h1>:<Login />}

    </div>)

  }
export default App;
