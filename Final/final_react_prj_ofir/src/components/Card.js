import React from "react"
import cardDataArray from "./cardDataArray"

function Card(props)
    {
    return <div className="card">

                <h2 className="name">
                    {props.name}
                </h2>

                <h3 className="info">{props.tel}</h3>
                <h3 className="info">{props.email}</h3>
                <img className="circle-img" src={props.img} alt="contact_image" /> 




    </div>
}

export default Card