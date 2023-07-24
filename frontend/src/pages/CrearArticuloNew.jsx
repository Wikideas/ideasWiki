import React, { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";
import { useTitlePost } from "../hooks/useTitlePost";
import { useTitleGET } from "../hooks/useTitleGET";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import "react-toastify/dist/ReactToastify.css";
import "../styles/crearArticulo.css";
import "../styles/carouselCrearArticulo.css";
import { useTheme } from "../context/ThemeProvider";

const CrearArticuloNew = () => {
  const [width, setWidth] = useState({ right: 0, left: -770 });
  const [articleName, setArticleName] = useState("");
  const [secciones, setSecciones] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(false); // Estado para controlar si el primer input está vacío
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); //Estado para cambiar estilo si se selecciona categoria
  const [isClicked, setIsClicked] = useState(false); //pARA VALIDAR SI SE HIZO CLICK O NO EN UNA CATEGORIA
  const [isClickedTitle, setIsClickedTitle] = useState(false); //pARA VALIDAR SI SE HIZO CLICK O NO EN UNA seccion
  const [isTextEmpty, setTextEmpty] = useState(false); // CValidar si el text area esta vacio
  console.log("isClicked", isClicked);
  console.log("isClickedTitle", isClickedTitle);
  console.log("isTextEmpty", isTextEmpty);
  const [previewImage, setPreviewImage] = useState(null);
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  /* Logica Carousel */

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

  /* Logica Renderizado Categorias */

  const { data: category } = useApi(
    "https://serviceone.onrender.com/api-wikideas/categories"
  );
  const [idCategory, setIdCategory] = useState(null);

  const handleIdCategory = (categoryId) => {
    setIdCategory(categoryId);
    setSelectedCategoryId(categoryId);

    if (categoryId) {
      setIsClicked(false);
      return;
    }
  };

  /* Logica Renderizado de sectionTitles */
  const { data: listadoTitulos } = useTitleGET(
    "https://serviceone.onrender.com/api-wikideas/section-titles"
  );

  const handleAddSection = () => {
    setSecciones([...secciones, { idTitle: null, content: "" }]);
  };

  const handleSelectSection = (e, index) => {
    const selectedIndex = e.target.selectedIndex;
    const nextId =
      selectedIndex < listadoTitulos.length
        ? listadoTitulos[selectedIndex]._id
        : null;
    const selectTitle = e.target.value;

    const updatedSecciones = [...secciones];
    updatedSecciones[index].idTitle = nextId;
    updatedSecciones[index].title = selectTitle;

    setSecciones(updatedSecciones);

    if (e) {
      setIsClickedTitle(false);
      return;
    }
  };

  const handleContentChange = (e, index) => {
    const content = e.target.value;
    const updatedSecciones = [...secciones];
    updatedSecciones[index].content = content;
    setSecciones(updatedSecciones);

    if (e) {
      setTextEmpty(false);
      console.log("Hay texto");
      return;
    }
  };

  /* Logica Para el guardado del titulo */

  const handleArticleName = (e) => {
    setArticleName(e.target.value);
    setIsInputEmpty(false);
  };

  /* Logica Publicar articulo */
  const { postRequest } = useTitlePost();

  const handleSaveSection = async () => {
    if (secciones.length > 0) {
      const sectionRequests = secciones.map((seccion) => {
        return postRequest(
          "https://serviceone.onrender.com/api-wikideas/sections/",
          {
            sectionTitleId: seccion.idTitle,
            sectionDetail: seccion.content,
          }
        );
      });

      try {
        const responses = await Promise.all(sectionRequests);
        responses.forEach((response, index) => {});
        const lastIds = responses.map((response) => response.idCreatedSection);
        const publicationData = {
          topic: articleName,
          categoryId: idCategory,
          detail: lastIds,
        };

        try {
          const publicationResponse = await axios.post(
            "https://serviceone.onrender.com/api-wikideas/publications",
            publicationData,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {}
      } catch (error) {}
    } else {
      console.log("No se pueden guardar las secciones sin título y contenido");
    }
  };

  /* Logica para Validaciones */

  const handlePublishClick = () => {
    if (articleName.trim() === "") {
      setIsInputEmpty(true);
      return;
    }

    handleSaveSection();
    mensaje();

    setTimeout(() => {
      window.location.href = "http://localhost:4000/";
    }, 6001);
  };

  const mensaje = () => {
    toast("🦄Articulo publicado!", {
      position: "top-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const rosalia = () => {
    if (!idCategory) {
      console.log("Vas a contramano rosalia");
      setIsClicked(true);
      return;
    }
  };

  const clickedTitle = (e) => {
    if (!e) {
      console.log("Falta el titulo");
      setIsClickedTitle(true);
      return;
    }
  };

  const textEmpty = (e) => {
    if (!e) {
      console.log("Te falta el texto");
      setTextEmpty(true);
      return;
    }
  };

  /* Subir Imagen */
  const handleImageChange = async (selectedImage) => {
    setIsLoading(true);
    setTimeout(() => {
      setImage(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
      setIsLoading(false);
    }, 2000);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      handleImageChange(acceptedFiles[0]);
    },
  });

  return (
    <div className="CrearArticulo" id={theme}>
      <div className="imgCont">
        <div
          {...getRootProps()}
          className={`upload ${previewImage ? "active" : ""}`}
        >
          <input {...getInputProps()} />
          {previewImage ? (
            <img src={previewImage} alt="Preview" />
          ) : (
            <div>
              <i class="bi bi-cloud-arrow-up"></i>
              <p>Sube una imagen</p>
            </div>
          )}
        </div>
        <div className={isInputEmpty ? "inputError" : ""}>
          <input
            type="text"
            placeholder={
              isInputEmpty ? "Agrega un Titulo" : "Nombre del articulo"
            }
            className={` inputZ ${isInputEmpty ? "inputError1 " : "imgText"}`}
            value={articleName}
            onChange={handleArticleName}
          />
          {isInputEmpty && (
            <i className="bi bi-exclamation-circle circleIcon"></i>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="contenedor-carousel container">
        <div className="categoryError">
          <h5>Seleccione una categoría:</h5>
          {isClicked && (
            <i className="bi bi-exclamation-circle circleIcon ms-3"></i>
          )}
        </div>
        <motion.div className="slider_container">
          <motion.div className="slider" drag="x" dragConstraints={width}>
            {category.map((categoria) => {
              return (
                <motion.div
                  className={`itemCarousel ${
                    selectedCategoryId === categoria._id ? "active" : ""
                  }`}
                >
                  <li
                    className="carouselLi text-center "
                    onClick={() => {
                      handleIdCategory(categoria._id);
                    }}
                    key={categoria._id}
                  >
                    {categoria.nameCategory}
                  </li>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        {/*            <p >Id de la categoría {idCategory}</p>
         */}{" "}
        <div className="contenedor-NoCarousel">
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
        </div>
      </div>

      {secciones.map((seccion, index) => (
        <div className="selected container " key={index}>
          <div className="selectedTitle">
            <select
              className="section shadow "
              onChange={(e) => handleSelectSection(e, index)}
            >
              {listadoTitulos.map((listado) => (
                <option key={listado._id} value={listado.sectionTitle}>
                  {listado.sectionTitle}
                </option>
              ))}
            </select>
            {isClickedTitle && (
              <i className="bi bi-exclamation-circle circleIcon ms-3"></i>
            )}
          </div>

          <textarea
            className={`textArea shadow ${
              isTextEmpty ? "borderText" : "textArea"
            } `}
            value={seccion.content}
            onChange={(e) => handleContentChange(e, index)}
          ></textarea>
        </div>
      ))}

      <div className="agregarSeccion">
        <i
          className="bi bi-plus-circle agregarIcon"
          onClick={handleAddSection}
        ></i>
        <p>Agregar sección</p>
      </div>
      <div className="butonsContainer">
        <button className="botonCancelar shadow-lg">Cancelar</button>
        {secciones.length > 0 && (
          <button
            className="botonPublicar shadow-lg ms-4"
            onClick={() => {
              handlePublishClick();
              rosalia(idCategory);
              clickedTitle();
              textEmpty();
            }}
          >
            Publicar
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CrearArticuloNew;
