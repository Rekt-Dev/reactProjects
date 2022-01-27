import React from "react"
import App from "../App"
import Form from "./Form"

function LoggedIn(){
    return  <div>
            <div>
             
             <h1>Sup sire/maam ?</h1>
<br />
               <h1> U r logged in. </h1>
              <h1 className=''>{}</h1>
              <br />
              
              <h1>This is your personal page</h1>
              <h3>here, you can edit your tasks, reminders, contacts & calendar, setup meetings, automatic call remiders and much much more. </h3>
              <br />
              <button id = "calendar" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">calendar</button>
              <button id = "reminders" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">reminders</button>
              <button id = "tasks" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">tasks</button>
              <button id = "skateboarding" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">skateboarding</button>
              <button id = "weather" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">weather</button>
              <button id = "world clock" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">world clock</button>
            
              <button id = "portfolio"className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">my portfolio</button>
<br></br>
<br></br>

<br></br>
<div>Footer gonna b here sire.</div>

           </div>
    </div>
}
export default LoggedIn