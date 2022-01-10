import React from "react"

function Form(props){
    return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                    {props.isRegistered===false && ( 
                <input type="password" placeholder="Confirm Password" />
                )}
                <input type="button" onClick={} className = "form-control-submit-buttontype="  placeholder={props.isRegistered ? "Login" : "Register"} />

            </form>


    )
}


export default Form