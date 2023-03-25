
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
import BarraDeBusqueda from './components/BarraDeBusqueda';
import Search from './pages/Search';
import ArticulosRecientes from './components/ArticulosRecientes';

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
          <Route path = '*' element={<NotFound/>}/>
        </Routes>

        <MediaQuery maxDeviceWidth={768}>
          <BarraDeBusqueda />
          <Routes>
            <Route exact path='/search' element={<Search />} />
          </Routes>
        </MediaQuery>

          <ArticulosRecientes/>
      </Router>

    </>
  );
}

export default App;

