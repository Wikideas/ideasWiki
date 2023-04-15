import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import MediaQuery from 'react-responsive';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import ArticulosRecientes from '../components/ArticulosRecientes';
import Carousel from '../components/carousel'
import Footer from '../components/Footer';


function Inicio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos o proceso asincrónico
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
  <>
    {isLoading ? (
        <Spinner /> 
      ) : (

    <div className='Inicio'>
      <MediaQuery maxDeviceWidth={768}>
        <BarraDeBusqueda />
      </MediaQuery>

      <Carousel />

      <ArticulosRecientes/>

      <Footer />
    </div>
    )}
  </>
  );
}

export default Inicio;