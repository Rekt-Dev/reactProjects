import React from "react"
import ReactDOM from "react-dom"
import Input from "./Input"

function Registration(){
let registrationForm  = <form className='form' >
       <Input className="" type="text" placeholder="Username" />
       <Input type ="password" placeholder="Password" />
       <Input type ="password" placeholder="Confirm Password" />

  <button className="form-control-input" type="submit">Login</button> 
</form>
}

export default Registration