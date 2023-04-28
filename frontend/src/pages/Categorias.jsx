import React, { useState, useEffect} from "react";
import axios from "axios";
import '../styles/Categorias.css';
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

    </>
  );
}

export default Categorias;
