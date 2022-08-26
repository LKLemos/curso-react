import './App.css';
import {useState} from 'react'
import OutraLista from './components/event/OutraLista';
import SeuNome from './components/SeuNome';
import StateLift from './components/StateLift';
import Saudacao from './components/Saudacao';

function App() {

  const MeusItens = ['React', 'Vue', 'View']
  const [nome, setNome] = useState()

  return (
    <div className="App">
    <h1>Renderização de lista</h1>
    <OutraLista itens={MeusItens} />
    <OutraLista itens={[]} />
    <StateLift />
    <SeuNome setNome={setNome} />
    <Saudacao nome={nome} />
    </div>
  );              //O  dado do array podem vir vazios:[] //
}

export default App;
