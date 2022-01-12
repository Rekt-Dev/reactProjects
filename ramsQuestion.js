 
import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row } from 'react-flexbox-grid'
 
const App = ()=> {
 const [showCounter,setShowCounter] = useState();
 const clicked=()=>{
   setShowCounter(showCounter?false:true);
 }
    return (
     <Grid>
       <Row>
         <button onClick={clicked} >
          {showCounter? "Hide counter":"Show counter"}
         </button>
       </Row>
       <Row>
       {showCounter && <Counter />}
       </Row>
     </Grid>
   )
 }
 
 
const Counter = () => {
 const [counter, setCounter] = useState(0);
  useEffect(() => {
   setInterval(() => {
     setCounter(counter++);
   }, 3000);
 }, []);
 
 return <>{counter}</>;
};
 
ReactDOM.render(
 <App />,
 document.getElementById('container')
);
