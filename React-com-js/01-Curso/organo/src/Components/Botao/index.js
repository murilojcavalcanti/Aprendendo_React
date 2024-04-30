import './botao.css';

const Botao=(prop)=>{
  return (
  <button className="botao">
    {prop.children}
  </button>
  );
}
export default Botao;