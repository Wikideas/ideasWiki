import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import { motion } from "framer-motion";
import axios from "axios";

const Carouseleq = () => {
  //Funcion para cambio de estado
  const [category, setCategory] = useState([""]);
  //console.log(category);

  //Funcion para llamar a la API
  useEffect(() => {
    //llamado asincronico de la API
    const obtenerCategory = async () => {
      const url = "https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory";
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });

      console.log(result.data.data[0].nameCategory);

      setCategory(result.data.data);
    };
    obtenerCategory();
  }, []);
  console.log(category, "category"); //comprobar si trae el array del api

  return (
    <div className="contenedor-carousel">
      <motion.div className="slider-container">
        {/*div que contendra las propiedades y funcionalidades de motion*/}
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -177 }}
        >
          {/* contenedor div para las category */}
          {category.map((categorias) => {
            return (
              <motion.div className="cont-item">
                <p key={category._id}>{categorias.nameCategory}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className="contenedor-NoCarousel">
        {category.map((categorias) => {
          return (
            <div className="item">
              <p key={category._id}>{categorias.nameCategory}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carouseleq;
