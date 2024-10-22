import './App.css';
import Jatekter from './components/Jatekter';
import { useContext } from 'react';
import { KattContext } from './contexts/KattContext';

function App() {

  const {lista}=useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <Jatekter lista={lista}/>
      </article>
      <footer><p>Horváth Nauzika</p></footer>
    </div>
  );
}

export default App;
