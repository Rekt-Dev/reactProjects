import React from "react"
import Input from "./Input"

function Login(){
   return ( 
       <div>
        <form className='form' >
       <Input className="" type="text" placeholder="Username" />
       <Input type ="password" placeholder="Password" />

  <button className="form-control-input" type="submit">Login</button> 
</form>
</div>
   )}


export default Login