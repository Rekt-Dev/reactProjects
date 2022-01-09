import './App.css';
import React from "react"
import Login from "./components/Login"
let isLoggedIn = true
let greeting=""
const timeNow = new Date().getHours()

console.log(`this is the time now ${timeNow}`)

function getTime(){
if(timeNow<12){
   greeting="Gmornin 2 ya"
} else if (timeNow<18){
   greeting="Gdafternoon 2 ya"
} else { greeting="Gdevenin 2 ya"}
}
getTime()

function App() {
  return ( 
    <div className='container'> 
      {isLoggedIn===true ? 
           <div>
             
             <h1>Sup sire/maam ?</h1>
<br />
               <h1> U r logged in. </h1>
              <h1 className=''>{greeting}</h1>
              <br />
              
              <h1>This is your personal page</h1>
              <h3>here, you can edit your tasks, reminders, contacts & calendar, setup meetings, automatic call remiders and much much more. </h3>
              <br />
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">calendar</button>
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">reminders</button>
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">tasks</button>
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">skateboarding</button>
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">weather</button>
              <button id = "portfolio" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">world clock</button>
            
              <button id = "portfolio"className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">my portfolio</button>
<br></br>
<br></br>

<br></br>
<div>Footer gonna b here sire.</div>

           </div>
          : <Login />}

    </div>) 

  }
export default App;
