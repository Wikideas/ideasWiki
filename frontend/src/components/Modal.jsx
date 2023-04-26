import React from 'react';
import '../styles/Modal.css';


const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>Cerrar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
