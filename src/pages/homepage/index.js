import React from 'react';
import './styles.css';

import HomeHeader from '../../components/homeHeader';
import Carosel from '../../components/carosel';
import Sobre from '../../components/sobre';
import Servicos from '../../components/servicos';

function Homepage() {
  return(
    <div id="homepage">
      <HomeHeader id_sobre="#sobre"/>
      <Sobre/>
      <Servicos/>
    </div>  
  );
}

export default Homepage;
