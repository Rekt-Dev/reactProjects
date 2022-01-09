import React from "react"

function Form(props){
    return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="input" placeholder={props.isRegistered ? "Login" : "Register"} />

            </form>


    )
}


export default Form