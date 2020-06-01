import React from 'react';
import './styles.css';

import HomeHeader from '../../components/homeHeader';
import Carosel from '../../components/carosel';
import Sobre from '../../components/sobre';

function Homepage() {
  return(
    <div id="homepage">
      <HomeHeader />
      <Sobre/>
    </div>  
  );
}

export default Homepage;
