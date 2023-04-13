
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import CrearArticulo from './pages/CrearArticulo';
import Comunidad from './pages/Comunidad';
import SobreNosotros from './pages/SobreNosotros';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';
import NotFound from './pages/NotFound';
import Articulo from './pages/articulo';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import Search from './pages/Search';
import ArticulosRecientes from './components/ArticulosRecientes';
import Carousel from './components/carousel'



function App() {
  return (
    <>
      <Router>
          <Navbar />  
        <Routes>
          <Route exact path='/crearArticulo' element={<CrearArticulo />} />
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/comunidad' element={<Comunidad />} />
          <Route exact path='/sobreNosotros' element={<SobreNosotros />} />
          <Route exact path='/soporte' element={<Soporte />} />
          <Route exact path='/configuracion' element={<Configuracion />} />
          <Route exact path='/articulo' element={<Articulo />} /> 
          <Route path = '*' element={<NotFound/>}/>
        </Routes>   

        {window.location.pathname === "/" && (
          <>

          <MediaQuery maxDeviceWidth={768}>
          <BarraDeBusqueda />
          <Routes>
            <Route exact path='/search' element={<Search />} />
          </Routes>
        </MediaQuery>
          <Carousel></Carousel>
          <ArticulosRecientes/>
          </>
        ) }  
     
        {window.location.pathname === "/articulo" && (
          <>
          </>
        )}

   



      </Router>

    </>
  );
}


export default App;

