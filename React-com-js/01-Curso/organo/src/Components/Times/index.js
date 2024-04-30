import './Time.css';
import Colaborador from '../Colaborador';

const Time=(props)=>{

  const css = {
    backgroundColor:props.corSecundaria,
    borderBottom:props.corPrimaria
  };
  const cssH3={
    borderColor:props.corPrimaria
  }
  
  return(
    //Renderização condicional
    //Usando operador ternario caso a condicional seja verdadeira devolve a section, se não devolve uma string vazia
    (props.Colaboradores.length > 0) ? <section  className='time'  style={css}>
      <h3 style={cssH3}>
        {props.nome}
      </h3>
      <div className='colaboradores'>

        {props.Colaboradores.map( colaborador=><Colaborador CorFundo={props.corPrimaria} key ={colaborador.nome} nome ={colaborador.nome} cargo={colaborador.cargo} imagem ={colaborador.imagem} time={colaborador.time}/>)}
      </div>

    </section>
    : ""
    
    //sem operador ternario
     /*(props.Colaboradores.length>0) && <section className='time'  style={css}>
      <h3 style={cssH3}>
        {props.nome}
        
      </h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador=><Colaborador nome ={colaborador.nome} cargo={colaborador.cargo} imagem ={colaborador.imagem} time={colaborador.time}/>)}
        {tamanho}
      </div>
    
      </section>
      */
  )
}
export default Time;