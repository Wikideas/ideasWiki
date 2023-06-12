import React, { useEffect, useState } from "react";
import "../styles/BarraDeBusqueda.css";
import { FaSearch } from "react-icons/fa";
import circular from "..//styles/assets/circular.gif";

function BarraDeBusqueda() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [article, setArticle] = useState({ topic: "", detail: null });
  const [data, setData] = useState();

  const getTopics = async () => {
    setData(null);
    const response = await fetch(
      `https://serviceone.onrender.com/api-wikideas/publications-by-string/${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data);
    setData(data);
  };
  /* Búsqueda de sugerencias */
  useEffect(() => {
    getTopics();
  }, [searchTerm]);

  /* Trae la publicación seleccionada */
  const handleClick = async (item) => {
    setSelected(item);
    setData(null);
  };

  useEffect(() => {
    const getPublication = async () => {
      if (selected) {
        const response = await fetch(
          `https://serviceone.onrender.com/api-wikideas/publication-by-number/${selected.numberPublication}`
        );
        const data = await response.json();
        setArticle({
          topic: data.publication.topic,
          detail: data.publication.detail,
        });
        setSearchResults([]);
        setSearchTerm("");
      }
    };
    getPublication();
  }, [selected]);

  //Se implementará proximamente, falta el endpoint en el backend.
  const handleSearchButton = () => {
    console.log("Pendiente de implementación", searchTerm);
  };

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <input
          className="form-control border-rounded-left border-rounded-right"
          style={{
            backgroundImage: `url(${FaSearch})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            paddingLeft: "2rem",
            fontSize: "14px"
          }}
          name="control"
          type="text"
          autoComplete="off"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trimStart())}
        />
        {/*  <button onClick={() => handleSearchButton()}>
                <FaSearch />
              </button> */}
        <div
          style={{
            zIndex: 2,
            backgroundColor: "#fff",
            width: "30%",
            borderRadius: "6px",
            position: "absolute",
            top: "52px",
            // top: "-2px",
          }}
        >
          {data === null ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={circular}
                alt="circular"
                style={{ width: "35px", borderRadius: "90px" }}
              />
            </div>
          ) : (
            searchResults.length > 0 && (
              <>
                <ul style={{ listStyleType: "none", margin: "1px" }}>
                  {searchResults.map((item) => (
                    <li
                      key={item.numberPublication}
                      onClick={() => {
                        handleClick(item);
                      }}
                      style={{
                        backgroundColor: "#fff",
                        margin: "2px",
                        width: "95%",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {item.topic}
                    </li>
                  ))}
                </ul>
              </>
            )
          )}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: -4,
          marginTop: "20px",
          marginLeft: "15px",
        }}
      >
        <h5>{article.topic}</h5>
        {article.detail}
      </div>
    </>
  );
}

{
  /* <input
  className="form-control border-rounded-left border-rounded-right"
  type="search"
  placeholder="Buscar"
  style={{
    backgroundImage: `url(${FaSearch})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    paddingLeft: '2rem',
  }}
/> */
}
export default BarraDeBusqueda;
