import React from 'react';
import imgLogo from '../styles/assets/Vector.svg';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
        <IconContext.Provider value={{ color: '#121212'}}>
          <div className='footer-row1'>
            <a href='/' className='footer-contenedor__logo'> 
              <img src={imgLogo} className='footer-logo' alt='logo_wikiIdeas'/> 
            </a>
            <div className='footer-contacts'>
              <h6 className='footer-contacts--title'>Contacto</h6>
              <a href="/" target="_blank"><AiIcons.AiOutlineMail />  ********@gmail.com</a>
              <a href="/" target="_blank"><AiIcons.AiOutlineInstagram />  Instagram ****</a>
              <a href="/" target="_blank"><FaIcons.FaLinkedin />  Linkedin *****</a>
            </div>
            <div className='footer-help'>
              <h6 className='footer-help--title'>Centro de ayuda</h6>
              <a href="/" target="_blank">Soporte</a>
              <a href="/" target="_blank">Ayudas</a>
              <a href="/" target="_blank">Políticas de privacidad</a>
            </div>
          </div>
          <div className='footer-row2'>
            <a href="/" target="_blank">Todos los derechos reservados.</a>
            <a href="/" target="_blank">Términos y condiciones</a>
            <a href="/" target="_blank">Aviso de privacidad</a>
          </div>
        </IconContext.Provider>
      </footer>
  )
}

export default Footer;