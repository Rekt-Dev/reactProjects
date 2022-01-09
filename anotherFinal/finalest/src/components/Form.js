import React from "react"

function Form(){
    return(
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" placeholder="Register" />

            </form>


    )
}


export default Form