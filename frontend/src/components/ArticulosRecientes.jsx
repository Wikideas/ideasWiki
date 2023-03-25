import React from 'react';
import "../styles/articulosRecientes.css";

const ArticulosRecientes = () => {
  return (
    <div className="container containerArticulos pt-2">

      <h2>Artículos recientes</h2>

      <div className="contenedorCards container">
        <div className="card card1" style={{ width: "18rem;" }}>
          <img
            src={require("../styles/assets/testimonio-diwght.jpeg")}
            className="card-img-top"
            alt="Articulos recientes"
          />
          <div class="card-body">
            <h5 class="card-title">Titulo</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="text-end pt-2">
              <a href="#" className="buttonStyle">
                Ver más
              </a>
            </div>
          </div>
        </div>

        <div className="card card1" style={{ width: "18rem;" }}>
          <img
            src={require("../styles/assets/testimonio-diwght.jpeg")}
            className="card-img-top"
            alt="Articulos recientes"
          />
          <div class="card-body">
            <h5 class="card-title">Titulo</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="text-end pt-2">
              <a href="#" className="buttonStyle">
                Ver más
              </a>
            </div>
          </div>
        </div>

        <div className="card card1" style={{ width: "18rem;" }}>
          <img
            src={require("../styles/assets/testimonio-diwght.jpeg")}
            className="card-img-top"
            alt="Articulos recientes"
          />
          <div class="card-body">
            <h5 class="card-title">Titulo</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="text-end pt-2">
              <a href="#" className="buttonStyle">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticulosRecientes;

