import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../styles/assets/LogoFooterWhite.svg';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
        <IconContext.Provider value={{ color: '#EBF7F8'}}>
          <div className='footer-row1'>
            <Link to='/' className='footer-contenedor__logo'> 
              <img src={imgLogo} className='footer-logo' alt='logo_wikiIdeas'/> 
            </Link>
            <div className='footer-contacts'>
              <h6 className='footer-contacts--title'>Contacto</h6>
              <Link to="/" target="_blank"><AiIcons.AiOutlineMail />  ********@gmail.com</Link>
              <Link to="/" target="_blank"><AiIcons.AiOutlineInstagram />  Instagram ****</Link>
              <Link to="/" target="_blank"><FaIcons.FaLinkedin />  Linkedin *****</Link>
            </div>
            <div className='footer-help'>
              <h6 className='footer-help--title'>Centro de ayuda</h6>
              <Link to='/soporte' >Soporte</Link>
              <Link to='/ayudas' >Ayudas</Link>
              <Link to='/politicasPrivacidad' >Políticas de privacidad</Link>
            </div>
          </div>
          <div className='footer-row2'>
            <Link to="/" target="_blank">Todos los derechos reservados.</Link>
            <Link to="/" target="_blank">Términos y condiciones</Link>
            <Link to="/" target="_blank">Aviso de privacidad</Link>
          </div>
        </IconContext.Provider>
      </footer>
  );
}


export default Footer;