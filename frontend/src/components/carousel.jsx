import React, { useState, useEffect} from "react";
import "../styles/carousel.css";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

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

  //Medidas para el carousel
    const [width, setWidth] = useState({right:0, left:-770});
 
  useEffect(() => {
   const handleResize = () => {
    const { innerWidth } = window;

    if (innerWidth < 500 ) {
      setWidth({right:0, left:-770});
    }
   else if (innerWidth < 600 ) {
      setWidth({right:0, left:-599});
    }
   else if (innerWidth < 700 ) {
      setWidth({right:0, left:-599});
    }
   else if (innerWidth < 800 ) {
      setWidth({right:0, left:-387});
    }
   else if (innerWidth < 900 ) {
      setWidth({right:0, left:-288});
    }
   else  if (innerWidth < 1000 ) {
      setWidth({right:0, left:-185});
    } 

    else if (innerWidth < 1100) {
      setWidth({right:0, left:-128});
    }
    else{
      setWidth({right:0, left:-100});
    }
  } 

    window.addEventListener('resize', handleResize)
    window.addEventListener('DOMContentLoaded', handleResize);
   handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('DOMContentLoaded', handleResize);
    }
  }, [setWidth]);   


  return (
    <div className="contenedor-carousel">
    <h3>Categorias</h3>
      <motion.div className="slider_container" >{/*  ref={slider_container} */}
        {/*div que contendra las propiedades y funcionalida
        des de motion*/}
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={width} 
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
              <Link to={`/categorias/${categorias.nameCategory}/${categorias._id}`} key={category._id}  >{categorias.nameCategory}</Link>
              {/* <p key={category._id}>{categorias.nameCategory}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carouseleq;











/*  const [width, setWidth] = useState(0);
  const slider_container = useRef()
 
  useEffect(() => {
    if (slider_container.current) {
      const newWidth = slider_container.current.scrollWidth - slider_container.current.offsetWidth 
      console.log(newWidth + 'console')
      setWidth(newWidth)
    } 
     setWidth(slider_container.current.scrollWidth - slider_container.current.offsetWidth)
    const newWidth = slider_container.current.scrollWidth - slider_container.current.offsetWidth 
    console.log(newWidth)
    setWidth(newWidth) 
  }, []); */
