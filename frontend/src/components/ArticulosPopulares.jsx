import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/ArticulosPopulares.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ArticulosPopulares = () => {
  const [data, setData] = useState([""]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      const url =
        "https://serviceone.onrender.com/api-wikideas/suggested-publications/7";
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });

      // Función para obtener los datos de detalle para cada publicación
      const getDetailData = async (id) => {
        const detailUrl = `https://serviceone.onrender.com/api-wikideas/sections/${id}`;
        const detailResult = await axios.get(detailUrl);
        return detailResult.data;
      };

      const getImageData  = async (id) => {
        const imageEndpoint = `https://serviceone.onrender.com/api-wikideas/section-images/${id}`;
        const imageResult = await axios.get(imageEndpoint);
        return imageResult.data;
      }

      const getSectionTitle  = async (id) => {
        const titleEndpoint = `https://serviceone.onrender.com/api-wikideas/section-titles/${id}`;
        const titleResult = await axios.get(titleEndpoint);
        return titleResult.data;
      }

      // Obtener las publicaciones
      const suggestedPublications = result.data.suggestedPublications;

      // Array para almacenar los datos completos de cada publicación
      const publicationsWithDetail = [];

      // Iterar a través de cada publicación y obtener los datos de detalle
      for (const publication of suggestedPublications) {
        const detailIds = publication.detail;

          // Obtener los datos de detalle para cada ID en paralelo
          const detailPromises = detailIds.map(async (id) => {
            const detail = await getDetailData(id);
            return detail;
          });
  
          // Esperar a que todas las solicitudes de detalle se resuelvan
          const detailData = await Promise.all(detailPromises);
  
          // Obtener los datos de imagen para cada detalle en paralelo
          const imagePromises = detailData.map(async (detail) => {
            const imageData = await getImageData(detail.section.sectionImageId);
            return imageData.section;
          });
  
          // Esperar a que todas las solicitudes de imagen se resuelvan
          const imagesData = await Promise.all(imagePromises);

          const titlePromises = detailData.map(async (detail) => {
            const titleData = await getSectionTitle(detail.section.sectionTitleId);
            return titleData.section;
          });
  
          // Esperar a que todas las solicitudes de imagen se resuelvan
          const sectionTitleData = await Promise.all(titlePromises);

             // Asignar los datos de imagen a cada objeto de detalle correspondiente
        detailData.forEach((detail, index) => {
          detail.imagesData = imagesData[index];
          detail.sectionTitleData = sectionTitleData[index];
        });

        // Agregar los datos completos de la publicación con los detalles a publicationsWithDetail
        publicationsWithDetail.push({
          ...publication,
          detailData,
        });
      }

      // Actualizar el estado con todos los datos completos de las publicaciones
      setData(publicationsWithDetail);
      setErrorMessage('');
    };

    obtenerDatos();
  }, []);
  
  useEffect(() => {
    // Set the error message after 15 seconds if data is still not loaded
    const timer = setTimeout(() => {
      if (!dataLoaded) {
        setErrorMessage('No existe idSection en details');
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [dataLoaded]);

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
      <div className='title-articlePop'>Artículos Populares</div>
      <motion.div className="slider_container1"> {/* Contiene el Carousel */}
        <motion.div className="slider1" drag="x" dragConstraints={width}>

          {data.map((publication, index) => (
            <motion.div className="cardContainer" key={index}> {/* Estilos de cada Card*/}
                {/* Imagen */}
                {publication.detailData && publication.detailData[0] && publication.detailData[0].imagesData ?  (
                <>
                <img
                  className="cardImg"
                  src={publication.detailData[0].imagesData.sectionImage}
                  alt="Articulos recientes"
                  
                />
                {/* Contenido */}
                <div className="ContentDiv pt-3">
                  <h5 className='ms-2'>{publication.topic}</h5>
                  <p className="card-text"> {/* {data.Detail} */}</p> 
                </div>
                
                {/* Boton */}
                  <div className="buttonContainer p-3">
                    <Link to={`/categorias/${data.nameCategory}/${data._id}`} key={data._id} className="buttonStyle1"  >
                      <span className='custonspan' >Ver más</span> 
                    </Link>
                  </div>
          </>
          ) : (
                  <p>{errorMessage || "Loading..."}</p>          
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticulosPopulares;


