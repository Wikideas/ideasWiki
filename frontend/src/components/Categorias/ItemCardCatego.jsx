import React from "react";
import { UseSectionGet } from "../../hooks/useSectionGet";

const ItemCardCatego = ({ itemData }) => {
  console.log("itemData", itemData);

  /* llamando API de section */

  const sectionDetails = itemData.detail.map((sectionId) => {
    const { data: section } = UseSectionGet(sectionId);
    return section?.sectionDetail;
  });

  /* Obtener los titulos de las secciones */

  const sectionTitlesIds = itemData.detail.map((sectionId) => {
    const { data: section } = UseSectionGet(sectionId);
    return section?.sectionTitleId;
  });
  console.log("titlesId", sectionTitlesIds);

  const sectionTitles = sectionTitlesIds.map((sectionTitleId) => {
    const { data: sectionTitle } = UseSectionGet(sectionTitleId);
    return sectionTitle?.sectionTitle;
  });

  console.log("sectionTitles", sectionTitles);

  return (
    <div>
      {sectionDetails.map((sectionDetail, index) => (
        <section key={index} className="cuerpo2 editableCont">
          <div className="row">
            <div className="imagenArticulo">
              <div>
                <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
              </div>
            </div>

            <div className="detalle1">
              <h4> Titulo {sectionTitles}</h4>
              <p>{sectionDetail}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ItemCardCatego;
