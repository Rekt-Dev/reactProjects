import React from "react"
import ReactDOM from "react-dom"

const name= "ofear"
const year = new Date()
let footer
let thisYear=year.getFullYear()

console.log(year)
ReactDOM.render(
        <div>

    <p>Created by {name}</p>
<p>Copyright {thisYear}</p>

</div>
, document.getElementById("root"))

export default footer