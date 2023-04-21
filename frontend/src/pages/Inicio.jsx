import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import Spinner from '../components/Spinner';
import MediaQuery from 'react-responsive';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import ArticulosRecientes from '../components/ArticulosRecientes';
import Carousel from '../components/carousel'
import Footer from '../components/Footer';
import "../styles/Inicio.css";


function Inicio() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme, themeName } = useTheme();

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

    <div className='Inicio' style={{ backgroundColor: theme?.background, color: theme?.textColor }} >
      <MediaQuery maxDeviceWidth={768}>
        <BarraDeBusqueda />
      </MediaQuery>

      <MediaQuery minDeviceWidth={768}>
        <div className='container-banner_inicio'>
          <div className='banner-text'>
            <h1>Tu enciclopedia virtual IT</h1>
            <h3>Una guía completa y actualizada sobre el mundo. <br /> Explora, aprende  y desarrolla.</h3>
          </div>
          <div className='banner-img'>
            <p>El modo actual es: "{themeName}"</p>
            <button onClick={toggleTheme} >Cambiar modo</button>
          </div>
        </div>
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