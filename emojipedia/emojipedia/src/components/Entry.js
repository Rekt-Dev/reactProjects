import React from "react"
import '../App.js'
import '../emojipedia'
import "../App"



        function Entry(props){

    return  <div className="term">
                 <dt className="dt">
                    <span className='emoji' role="img" aria-label="Tense Biceps">
                         {props.emoji}
                    </span> 
      
                   <span  >{props.name}</span>
                 </dt>

    <dd className="dtspan"> 
                {props.description}
    </dd>

</div>

}

export default Entry 