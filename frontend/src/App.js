import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import CrearArticulo from './pages/CrearArticulo';
import Comunidad from './pages/Comunidad';
import SobreNosotros from './pages/SobreNosotros';
import Configuracion from './pages/Configuracion';
import NotFound from './pages/NotFound';
/* import Articulo from './pages/Articulo'; */
import Articulos from './pages/Articulos'
import Search from './pages/Search';
import Categorias from './pages/Categorias';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
        <Navbar />

          <Routes>
            <Route exact path='/' element={<Inicio />} />
            <Route exact path='/crearArticulo' element={<CrearArticulo />} />
            <Route exact path='/comunidad' element={<Comunidad />} />
            <Route exact path='/sobreNosotros' element={<SobreNosotros />} />
            <Route exact path='/configuracion' element={<Configuracion />} />
          {/*   <Route exact path='/articulo' element={<Articulo/>} />  */}
            <Route exact path='/articulos' element={<Articulos/>} />  
            <Route exact path='/search' element={<Search />} />
            {/* <Route exact path='/categorias' element={<Categorias />} /> */}
            <Route exact path='/categorias/:nameCategory/:_id' element={<Categorias />} />
            <Route path = '*' element={<NotFound/>}/>
          </Routes>

        <Footer />
    </BrowserRouter>
  );
}


export default App;

