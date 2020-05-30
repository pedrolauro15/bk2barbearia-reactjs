import React from 'react';
import './styles.css';

import HomeHeader from '../../components/homeHeader';
import Carosel from '../../components/carosel';

function Homepage() {
  return(
    <div id="homepage">
      <HomeHeader />
      <Carosel />
    </div>
    
  );
}

export default Homepage;