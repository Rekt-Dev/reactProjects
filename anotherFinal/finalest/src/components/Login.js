import React from "react"
import Input from "./Input"
import styles from "../styles.css"

function Login(){
   return ( 
       <div>
        <form className='form' >
       <Input className="button" type="text" placeholder="Username" />
       <Input type ="password" placeholder="Password" />

  <button className="button" type="submit">Login</button> 
</form>
</div>
   )}


export default Login