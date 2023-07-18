import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
/* import CrearArticulo from './pages/CrearArticulo'; */
import Comunidad from './pages/Comunidad';
import SobreNosotros from './pages/SobreNosotros';
import Configuracion from './pages/Configuracion';
import NotFound from './pages/NotFound';
/* import Articulo from './pages/Articulo'; */

import Articulos from './pages/Articulos'
import Search from './pages/Search';
import Categorias from './pages/Categorias';
import Footer from './components/Footer';
import CrearArticuloNew from './pages/CrearArticuloNew';
/* import ItemListId from './components/ItemListId/ItemListId'; */
import ItemListIdArt from './components/ItemListId/ItemListIdArt';
import { TitleProvider } from './context/TitleContext';


function App() {

  return (
    <BrowserRouter>
     <TitleProvider>
        <Navbar />

          <Routes>
            <Route exact path='/' element={<Inicio />} />
             <Route exact path='/crearArticulo' element={<CrearArticuloNew/>} /> 
            <Route exact path='/comunidad' element={<Comunidad />} />
            <Route exact path='/sobreNosotros' element={<SobreNosotros />} />
            <Route exact path='/configuracion' element={<Configuracion />} />

            <Route exact path='/articulos' element={<Articulos/>} />  
             

            <Route exact path='/search' element={<Search />} />
            {/* <Route exact path='/categorias' element={<Categorias />} /> */}
            <Route exact path='/categorias/:nameCategory/:categoryId' element={<Categorias />} />
            <Route exact path='/articulos/:detail' element={<ItemListIdArt/>} />
            <Route path = '*' element={<NotFound/>}/>
          </Routes>

        <Footer />
        </TitleProvider>
    </BrowserRouter>
   
  );

}



export default App;

