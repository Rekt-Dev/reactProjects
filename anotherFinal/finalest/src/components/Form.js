import React from "react"
import styles from "../styles.css"
import isUserRegistered from "../App"
function Form(props){
    return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                    {props.isRegistered===false && ( 
                <input type="password" placeholder="Confirm Password" />
                )}
                <button type="button" className = "form button"  placeholder={props.isRegistered} 
               {isUserRegistered ? "Login" : "Register"} />

            </form>


    )
}


export default Form