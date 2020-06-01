import React from 'react';
import './styles.css';
import Sobre from '../../components/sobre';
import Servicos from '../../components/servicos';

import { FaHome  } from 'react-icons/fa';
import { GiBeard } from 'react-icons/gi';
import { GoMegaphone } from 'react-icons/go';
import { FiInstagram, FiLogIn, FiPhone } from 'react-icons/fi';

//https://react-icons.github.io/react-icons/

import assets from '../../assets';

function HomeHeader({id_sobre, id_promo, id_redes, id_contatos}) {
  function changeSelected(e){

    document.querySelector('.home-header-menu ul li.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }

  return(
    <div id="home-header">
      <img alt="logo.png" src={assets.carinha_branca}/>

      <div className="home-header-menu">
	      <ul className="home-header-menu-ul">
          <li className="selected" onClick={e => changeSelected(e)}><a href="#servicos"><FaHome  className="header-icon"/>HOME</a></li>
          <li onClick={e => changeSelected(e)}><GiBeard className="header-icon"/> BK2 BARBEARIA</li>
          <li onClick={e => changeSelected(e)}><GoMegaphone className="header-icon"/> PROMOÇÕES</li>
          <li onClick={e => changeSelected(e)}><FiInstagram className="header-icon"/> REDES SOCIAIS</li>
          <li onClick={e => changeSelected(e)}><FiPhone className="header-icon"/> CONTATOS</li>
          <li onClick={e => changeSelected(e)}><FiLogIn className="header-icon"/> LOGIN</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;