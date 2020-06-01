import React from 'react';
import './styles.css';

function Botao({title, style, onClick, icon}) {
  return <button id="botao" style={style} onClick={onClick} >{icon ? icon : null} {title}</button>;
}

export default Botao;