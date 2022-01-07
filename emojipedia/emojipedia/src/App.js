import './App.css';
import './styles.css'
import './emojipedia'
import './App.js'
import Entry from './components/Entry'
import emojipedia from './emojipedia';


function PlaceData(emojiTerm){
  return(<Entry 
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
  />
  )
}

function App() {
  return (
    <div > 
          <h1>
            <span>emojipedia</span>
          </h1>
         <dl className='dictionary'> {emojipedia.map(PlaceData)}</dl>


           </div>
  ); 
}

export default App;
