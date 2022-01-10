import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from "./components/Header"
import Card from "./components/Card"



ReactDOM.render(
  <React.StrictMode>

    <Header /> 

    <Card 
   name = "NoName"
   email="bl3h@offline.org "
   tel="+012-666-8869"
   img="https://www.nme.com/wp-content/uploads/2020/06/Noname-1068x678.jpg"

    />
    <Card 
    name="joseph"
    img="https://w2.chabad.org/media/images/922/tVUv9226297.jpg"
    tel="+123-543-7654"
    email="bl3h@idle.org "

    /> 

    <Card 
    
    name="Sigalit"
    img= "https://images.e-flux-systems.com/315683_12e787bf4e7eeb8bcc18c10355ecda86.jpg,1024"
    tel="+012-666-8869"
    email="bl3h@online.org "

    />

<Card 
    
    name="David Haselhoff"
    img= "https://images.e-flux-systems.com/315683_12e787bf4e7eeb8bcc18c10355ecda86.jpg,1024"
    tel="+012-666-8869"
    email="bl3h@online.org "

    />

<Card 
    
    name="Timothy Leary"
    img= "https://cdn.britannica.com/18/194518-050-AEEE0F57/Timothy-Leary.jpg"
    tel="+012-666-8869"
    email="bl3h@online.org "

    />
    
<Card 
    
    

    />

<Card />

    <App />

    <Footer /> 

  </React.StrictMode>,   

  document.getElementById('root')  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
