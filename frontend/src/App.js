
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import CrearArticulo from './pages/CrearArticulo';
import Comunidad from './pages/Comunidad';
import SobreNosotros from './pages/SobreNosotros';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Categorias from './pages/Categorias';


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
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/categorias' element={<Categorias />} />

          <Route path = '*' element={<NotFound/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;

