import './App.css';
import  './styles.css'
import cardDataArray from './components/cardDataArray';

function App() {
  return (
   <div>
<h1 >this is  a story about {cardDataArray[2].name}</h1>
    </div>
  );
}

export default App;
