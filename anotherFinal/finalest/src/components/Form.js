import React from "react"

function Form(props){
    return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" placeholder={props.isRegistered} />

            </form>


    )
}


export default Form