import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useApi } from '../hooks/useApi';
import { useApiCategory } from "../hooks/useApiCategory";
import LoaderDisenio from "./Loader/LoaderDisenio";
import Loader from "./Loader/Loader";
import "../styles/carouselCrearArticulo.css";
/* import "../styles/carouselo.css"; */

const CarouselCrearArticulo = () => {
  
  const { data: category } = useApi(
    'https://serviceone.onrender.com/api-wikideas/categories'
  );
  const [idCategory, setIdCategory] = useState(null);

  const handleIdCategory = (categoryId) => {
    setIdCategory(categoryId);
  };

  const [width, setWidth] = useState({ right: 0, left: -770 });

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth <= 600) {
        setWidth({ right: 10, left: -500 });
      } else if (innerWidth <= 768) {
        setWidth({ right: 250, left: -250 });
      } else if (innerWidth <= 992) {
        setWidth({ right: 100, left: -100 });
      } else if (innerWidth <= 1200) {
        setWidth({ right: 0, left: -288 });
      } else {
        setWidth({ right: 0, left: -100 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="contenedor-carousel container" >
      <h4>Seleccione una categoría</h4>

      {/* {loading ? (
        <Loader cargando={LoaderDisenio} />
      ) : ( */}
        <motion.div className="slider_container">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={width}
          >
            {category.map((categoria) => {
              return (
                <motion.div className="itemCarousel shadow" >
                        <Link  
                                to= {`/articulos/${categoria._id}`}
                                className="carouselLi text-center " 
                                onClick={() => handleIdCategory(categoria._id)}
                                key={categoria._id}
                              >{categoria.nameCategory}
                        </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      {/* )} */}
      {/*  <p>Id de la categoría {idCategory}</p>  */}
      {/* <div className="contenedor-NoCarousel">
        {category.map((categorias) => {
          return (
            <div className="item" key={categorias._id}>
              <Link
                to={`/categorias/${categorias.nameCategory}/${categorias._id}`}
              >
                {categorias.nameCategory}
              </Link>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default CarouselCrearArticulo;



  

