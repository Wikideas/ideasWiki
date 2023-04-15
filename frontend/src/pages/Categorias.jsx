import React, { useState, useEffect} from "react";
import axios from "axios";
import '../styles/Categorias.css';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function Categorias() {
  const { nameCategory, _id } = useParams();

  const [cardCategory, setCardCategory] = useState([""]);
  //console.log(category);


  //Funcion para llamar a la API
  useEffect(() => {
    //llamado asincronico de la API

    const obtenerCardCategory = async () => {
      const url = `https://serviceone.onrender.com/apiWikiIdeasV1d/getPublicationbyIdCategory/${_id}`;
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });

      setCardCategory(result.data);
    };
    obtenerCardCategory();
  }, [_id]);
  

  return (
    <>
      {/* Aquí se renderiza el banner */}
      <div className='container-banner'>
        <h1>Categoria: {nameCategory} </h1>
      </div>

      {/* Aquí se renderizan las cards horizontales */}
    <div className='categorias-container__cards'>
      {cardCategory.map(card => (
        <div className='categorias-card' key={card._id}>
          <img src={card.imagen} alt={card.Topic} />
          <h2>Título: {card.Topic}</h2>
          <p>Descripción: {card.Detail}</p>
        </div>
      ))}
    </div>

      {/* Aquí se renderiza el footer */}
      <Footer />
    </>
  );
}

export default Categorias;


// function Categorias() {
//   const [categoria, setCategoria] = useState('');
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     // Aquí se realizan las consultas a ambas APIs en paralelo
//     Promise.all([
//       axios.get('https://api.escuelajs.co/api/v1/categories'),
//       axios.get('https://api.escuelajs.co/api/v1/categories')
//     ])
//       .then(response => {
//         setCategoria(response[0].data.nombre);
//         setProductos(response[1].data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
