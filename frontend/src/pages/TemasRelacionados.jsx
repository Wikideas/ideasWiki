import React from "react";
import "../styles/articulo.css";
import "../styles/articulosMediasQueries.css";
import Box from "@mui/material/Box";



function TemasRelacionados () {
    return (
        <section className="temas nonEditable">
        <div className="TemasRelacionados">
          <p>
            <b>Temas relacionados</b>
          </p>
        </div>

        <div className="box-container">
          <tr className="card">
            <td className="contImagen">
              <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
            </td>
            <td className="contTitulo">
              <h6>Titulo</h6>
            </td>
            <td className="contParrafo">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
              </p>
            </td>
            <td className="contBoton">
              <button type="button" class="btn btn-secondary">
                Ver mas
              </button>
            </td>
          </tr>

          <tr className="card">
            <td className="contImagen">
              <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
            </td>
            <td className="contTitulo">
              <h6>Titulo</h6>
            </td>
            <td className="contParrafo">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
              </p>
            </td>
            <td className="contBoton">
              <button type="button" class="btn btn-secondary">
                Ver mas
              </button>
            </td>
          </tr>

          <tr className="card">
            <td className="contImagen">
              <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
            </td>
            <td className="contTitulo">
              <h6>Titulo</h6>
            </td>
            <td className="contParrafo">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
              </p>
            </td>
            <td className="contBoton">
              <button type="button" class="btn btn-secondary">
                Ver mas
              </button>
            </td>
          </tr>
        </div>
      </section>
    );
}

export default TemasRelacionados;