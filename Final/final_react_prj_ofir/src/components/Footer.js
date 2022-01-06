import React from "react"

const name = "0fear"
const currentDate=new Date()
const year = currentDate.getFullYear()


function Footer(){
    return <div>
    <p>
        Created by the mighty {name}
    </p>
    <p>
        Copyright  {year}
    </p> 
    
    </div>
}

    
export default Footer