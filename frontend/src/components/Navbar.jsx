import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { useTheme } from '../context/ThemeProvider';
import MediaQuery from 'react-responsive';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../styles/Navbar.css';
import BarraDeBusqueda from './BarraDeBusqueda';
import SunMoon from '../components/compartidos/SunMoon';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { theme, toggleTheme, themeName } = useTheme();


  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  function handleClick() {
    navigate('/crearArticulo');
  }

  return (
    <>
      <div className='navbar' id={theme}>
        {/* Mobile */}
        <MediaQuery maxDeviceWidth={768}>
          <Link to='#' className='link nav__menu--burger'>
            <FaIcons.FaBars className='icon nav__menu--burger' onClick={showSidebar} />
          </Link>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} >
                    <Link to={item.path} >
                      <span>{item.title}</span>
                      {item.icons}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </MediaQuery>
        
        {/* Logo */}
        <div className='navbar-contenedor__logo'>
          <Link to='/' className='nav__logo'></Link>
        </div>

        {/* Search Mobile */}
        <MediaQuery maxDeviceWidth={768}>
          <Link to='/' className='link nav__search'>
            <AiIcons.AiOutlineSearch className='icon nav__search'/>
          </Link>
        </MediaQuery>

        {/* Desktop */}
        <MediaQuery minDeviceWidth={768}>
          <div className='nav_container--rigth'>
            <BarraDeBusqueda />
            
            <div onClick={toggleTheme} className='icon-container'><SunMoon /> </div> 
            <button className="btnCrearArticulo" onClick={handleClick}> Crear artículo </button>
            <Link to="/sobreNosotros" className="btnSobreNosotros" >Sobre Nosotros</Link>
          </div>
        </MediaQuery>

      </div>
    </>
  );
}

export default Navbar;