import './colaborador.css'
 const colaborador=({nome,imagem, cargo,CorFundo})=>{

  return(
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor:CorFundo}}>
       <img src={imagem} alt={nome}/> 
      </div>

      <div className='rodape'>
        <h4>
          {nome}
        </h4>
        <h5>
        {cargo}
        </h5>
      </div>
    </div>
  )
 }
 export default colaborador;