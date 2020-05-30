import React from 'react';
import './styles.css';

import assets from '../../assets';

function HomeHeader() {
  return(
    <div id="home-header">
      <img alt="logo.png" src={assets.carinha_branca}/>

      <div className="home-header-menu">
	      <ul className="home-header-menu-ul">
          <li><a href="/./">Home</a></li>
          <li>BK2 Barbearia</li>
          <li>Promoções</li>
          <li>Redes Sociais</li>
          <li>Contato</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;