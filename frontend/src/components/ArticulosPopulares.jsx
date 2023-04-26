import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/ArticulosPopulares.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ArticulosPopulares = () => {
  const [data, setData] = useState([""]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const url =
        "https://serviceone.onrender.com/apiWikiIdeasV1d/getSuggestedPublications/10";
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });
      console.log(result.data.suggestedPublications); //Probando

      setData(result.data.suggestedPublications);
    };
    obtenerDatos();
  }, []);

  console.log(data, "prueba");

  //Medidas para el carousel
  const [width, setWidth] = useState({ right: 0, left: -770 });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth < 500) {
        setWidth({ right: 0, left: -770 });
      } else if (innerWidth < 600) {
        setWidth({ right: 0, left: -500 });
      } else if (innerWidth < 700) {
        setWidth({ right: 0, left: -599 });
      } else if (innerWidth < 800) {
        setWidth({ right: 0, left: -387 });
      } else if (innerWidth < 900) {
        setWidth({ right: 0, left: -288 });
      } else if (innerWidth < 1000) {
        setWidth({ right: 0, left: -185 });
      } else if (innerWidth < 1100) {
        setWidth({ right: 0, left: -128 });
      } else {
        setWidth({ right: 0, left: -100 });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("DOMContentLoaded", handleResize);
    };
  }, [setWidth]);

  return (
    <div className="container pt-3">
      <h2>Artículos Populares</h2>
      <motion.div className="slider_container">
        <motion.div className="slider" drag="x" dragConstraints={width}>

          {data.map((data) => (
            <motion.div className="cont-item1"> {/* Afecta estilos de cada card */}
              <div className="card card1" style={{ width: "25rem;" }}>
                <img
                  src={require("../styles/assets/testimonio-diwght.jpeg")}
                  className="card-img-top"
                  alt="Articulos recientes"
                />
                <div class="card-body">
                  <h5 class="card-title">{data.Topic}</h5>
                  <p class="card-text"> {/* {data.Detail} */}</p> {/* Hay que definir la cantidad de caranteres que lleva cada descripcion */}
                  <Link to={`/categorias/${data.nameCategory}/${data._id}`} key={data._id}  >{data.nameCategory}
                  <div className="text-end pt-2">
                    <a href="#" className="buttonStyle1">Ver más</a>
                  </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticulosPopulares;
                  

        


    


