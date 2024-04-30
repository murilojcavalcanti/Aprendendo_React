import { useState } from 'react';
import Banner from './Components/Banner';
import Fomulario from './Components/Formulario';
import Time from './Components/Times';
import Rodape from './Components/Rodape';

function App() {
  const times = [
    {
      nome:"Programação",
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9',
    },
    {
      nome:"Front-End",
      corPrimaria:"#82cffa",
      corSecundaria:"#e8f8ff",
    },
    {
      nome:"Data Science",
      corPrimaria:"#a6d157",
      corSecundaria:"#f0f8e2",
    },
    {
      nome:"Devops",
      corPrimaria:"#e06b69",
      corSecundaria:"#fde7e8",
    },
    {
      nome:"UX e Design",
      corPrimaria:"#db6ebf",
      corSecundaria:"#fae9f5",
    },
    {
      nome:"Mobile",
      corPrimaria:"#ffba05",
      corSecundaria:"#fff5d9",
    },
    {
      nome:"Inovação e Gestão",
      corPrimaria:"#ff8a29",
      corSecundaria:"#ffeedf",
    }
  ];
  const [colaboradores,setColaboradores] = useState([])
  
  const aoNovoColabroradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      
      <Fomulario Times = {times.map(time=>time.nome)} aoColaboradorCadastrado={colaborador=>aoNovoColabroradorAdicionado(colaborador)}/>
      
      {times.map(times => <Time 
            key = {times.nome}
            nome ={times.nome} 
            corPrimaria ={times.corPrimaria} 
            corSecundaria ={times.corSecundaria}
            // eslint-disable-next-line eqeqeq
            Colaboradores = {colaboradores.filter(c=>c.time == times.nome) }
            />)}

            <Rodape/>
    </div>
  );
}
export default App;