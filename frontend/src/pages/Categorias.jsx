import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Categorias.css';
import Footer from '../components/Footer';

function Categorias() {
  const [categoria, setCategoria] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí se realizan las consultas a ambas APIs en paralelo
    Promise.all([
      axios.get('https://api.escuelajs.co/api/v1/categories'),
      axios.get('https://api.escuelajs.co/api/v1/categories')
    ])
      .then(response => {
        setCategoria(response[0].data.nombre);
        setProductos(response[1].data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='categorias-container'>
      {/* Aquí se renderiza el banner */}
      <div className='container-banner'>
        <h1>Categoria: {categoria}</h1>
      </div>

      {/* Aquí se renderizan las cards horizontales */}
    <div className='categorias-container__cards'>
      {productos.map(producto => (
        <div className='categorias-card' key={producto.id}>
          <img src={producto.imagen} alt={producto.titulo} />
          <h2>Título: {producto.titulo}</h2>
          <p>Descripción: {producto.descripcion}</p>
        </div>
      ))}
    </div>

      {/* Aquí se renderiza el footer */}
      <Footer />
    </div>
  );
}

export default Categorias;
