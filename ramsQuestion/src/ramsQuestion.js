 
// importing modules and components
// react hook use effect has a missing dependency  
import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row } from 'react-flexbox-grid'
 
//
const App = ()=> {
 const [showCounter,setShowCounter] = useState();
 const clicked=()=>{
   setShowCounter(showCounter?false:true);
 }
    return (
      // I do not know who grid is or what he does ? ...
     <Grid>
             {/* I do not know who row is or what she does ? ...*/}
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
 
 // as we said earlier, cant assign to const.
 // I blv here the 
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
 /* does the index html have this div ? */
 document.getElementById('container')
);
