import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react';

function App() {

  const [lista, setLista]=useState([true, false, false, true, false, true,false, false, true]);

  function katt(adat){
    const segedLista=[...lista] 

      if(segedLista[adat] == true){
        segedLista[adat] = false
      }
      else{
        segedLista[adat] = true;
      }
      setLista([...segedLista]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>
      <footer><p>Horváth Nauzika</p></footer>
    </div>
  );
}

export default App;
