import React from "react"

Card.defaultProps={
    name:"a name",
    tel:"a phone number",
    img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}
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