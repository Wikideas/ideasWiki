import React from 'react';
import '../styles/BarraDeBusqueda.css';
import { FaSearch } from 'react-icons/fa';

function BarraDeBusqueda() {
  return (

      <input
        className="form-control border-rounded-left border-rounded-right"
        type="search"
        placeholder="Buscar"
        style={{
          backgroundImage: `url(${FaSearch})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          paddingLeft: '2rem',
        }}
      />

  );
}

export default BarraDeBusqueda;