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
        "https://serviceone.onrender.com/api-wikideas/suggested-publications/10";
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });
      // console.log(result.data.suggestedPublications); //Probando

      setData(result.data.suggestedPublications);
    };
    obtenerDatos();
  }, []);

/*   console.log(data, "prueba");
 */
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
    <div className="container pt-3"> {/* Container Global */}
      <h2>Artículos Populares</h2>
      <motion.div className="slider_container1"> {/* Contiene el Carousel */}
        <motion.div className="slider1 " drag="x" dragConstraints={width}>

          {data.map((data) => (
            <motion.div className="cardContainer" > {/* Estilos de cada Card*/}
                {/* Imagen */}
                <img
                  className="cardImg"
                  src={require("../styles/assets/testimonio-diwght.jpeg")}
                  alt="Articulos recientes"
                  
                />
                {/* Contenido */}
                <div className="ContentDiv pt-3">
                  <h5 className='ms-2'>{data.Topic}</h5>
                  <p className="card-text"> {/* {data.Detail} */}</p> {/* Hay que definir la cantidad de caranteres que lleva cada descripcion */}
                </div>
                
                {/* Boton */}
                  <div className="buttonContainer p-3">
                    <Link to={`/categorias/${data.nameCategory}/${data._id}`} key={data._id} className="buttonStyle1"  >
                      Ver más
                    </Link>
                  </div>
            </motion.div>
          ))}
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticulosPopulares;
                  

        


    


