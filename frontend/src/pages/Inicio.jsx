import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import Spinner from "../components/Spinner";
import MediaQuery from "react-responsive";
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import ArticulosPopulares from "../components/ArticulosPopulares";
import CarouselHome from "../components/CarouselHome";
import "../styles/Inicio.css";

function Inicio() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="Inicio" id={theme}>
          <MediaQuery maxDeviceWidth={768}>
            <BarraDeBusqueda />
          </MediaQuery>

          <MediaQuery minDeviceWidth={768}>
            <div className="container-banner_inicio">
              <div className="banner-text">
                <h1>Tu enciclopedia virtual IT</h1>
                <h3>
                  Una guía completa y actualizada sobre el mundo. <br />{" "}
                  Explora, aprende y desarrolla.
                </h3>
              </div>
              <div className="banner-img">
                <img
                  src={require("../styles/assets/banner-inicio.png")}
                  alt="inicioImg"
                />
                {/* <p>El modo actual es: "{themeName}"</p>
            <button onClick={toggleTheme} >Cambiar modo</button> */}
              </div>
            </div>
          </MediaQuery>

          <CarouselHome />
          <ArticulosPopulares />
        </div>
      )}
    </>
  );
}

export default Inicio;
