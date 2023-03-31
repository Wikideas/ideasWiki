import React from 'react';
import MediaQuery from 'react-responsive';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import ArticulosRecientes from '../components/ArticulosRecientes';
import Carousel from '../components/carousel'



function Inicio() {
  return (
  <div className='Inicio'>
    <MediaQuery maxDeviceWidth={768}>
      <BarraDeBusqueda />
    </MediaQuery>

    <Carousel />

    <ArticulosRecientes/>

  </div>
  );
}

export default Inicio;