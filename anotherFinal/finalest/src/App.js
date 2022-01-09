import logo from './logo.svg';
import './App.css';
import React from "react"


let isLoggedIn = false

function conditionRendering(){ 
  if (isLoggedIn===true){
    return <h1>Sup sire/maam ? <br></br>
     <br></br>
      U r logged in.</h1>
      
  } else {
    return (<form className='form' >
    <input type='text' placeholder="Username" />
  <input type= 'password' placeholder='Password' />
  <button type="submit">Login</button> 
</form>)
  }
}


function App() {
  return (
    <div className='container' >
      <h1>Hello ! </h1>
      {conditionRendering()}
    </div>
  );
}

export default App;
