import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import '../styles/Footer.css'
import Modal from './Modal';
import { useTheme } from '../context/ThemeProvider';


function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const { theme } = useTheme();

  const handleButtonClick = (event, buttonName) => {
    event.preventDefault();
    let content;
    if (buttonName === 'soporte') {
      content = '¿Tienes alguna sugerencia o comentario sobre nuestra web app? Nos encantaría escuchar tus ideas para mejorar la experiencia del usuario. Puedes contactarnos a través del formulario de contacto o enviarnos un correo electrónico a feedback@wikiIdeas.com.';
    } else if (buttonName === 'ayuda') {
      content = 'Si estás teniendo problemas para encontrar información en nuestra web app, o necesitas algún tipo de ayuda, por favor, ponte en contacto con nuestro equipo de soporte y estaremos encantados de ayudarte a encontrar lo que estás buscando.';
    } else if (buttonName === 'privacidad') {
      content = 'Utilizamos cookies y otras tecnologías de seguimiento para recopilar información sobre cómo los usuarios interactúan con nuestra web app. Puedes controlar tus preferencias de cookies en cualquier momento desde la configuración de tu navegador.';
    }
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <footer id={theme}>
      <div className='footer-row1'>
        <div className='footer-contenedor__logo'>
          <Link to='/' className='footer-logo'></Link>
        </div>
        <div className='footer-contacts'>
          <h6 className='footer-contacts--title'>Contacto</h6>
          <Link to="https://idforideas.com/" target="_blank"><AiIcons.AiOutlineMail />  ********@gmail.com</Link>
          <Link to="https://discord.com/invite/sugUASXHeU" target="_blank"><AiIcons.AiOutlineInstagram />  Instagram ****</Link>
          <Link to="https://www.linkedin.com/company/id-for-ideas/mycompany/" target="_blank"><FaIcons.FaLinkedin />  Linkedin *****</Link>
        </div>
        <div className='footer-help'>
          <h6 className='footer-help--title'>Centro de ayuda</h6>
          <Link to='#' className='openModalBtn' onClick={(event) => handleButtonClick(event, 'soporte')}>Soporte</Link>
          <Link to='#' className='openModalBtn' onClick={(event) => handleButtonClick(event, 'ayuda')}>Ayuda</Link>
          <Link to='#' className='openModalBtn' onClick={(event) => handleButtonClick(event, 'privacidad')}>Política de Privacidad</Link>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <p>{modalContent}</p>
            </Modal>
          )}
        </div>
      </div>
      <div className='footer-row2'>
        <p>Todos los derechos reservados.</p>
        <p>Términos y condiciones.</p>
        <p>Aviso de privacidad.</p>
      </div>
    </footer>
  );
}

export default Footer;