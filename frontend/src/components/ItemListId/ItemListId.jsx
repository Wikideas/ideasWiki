
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListCatego from '../Categorias/ItemListCatego';
import { usePublicationsGet } from '../../hooks/usePublicationsGet';
import { useApiCategory } from '../../hooks/useApiCategory';


const ItemListId = () => {

    //llamando publications
 const { data: publications } = usePublicationsGet('https://serviceone.onrender.com/api-wikideas/publications')
 console.log(publications)

 const [articulos, setArticulos] = useState([]);
console.log('articulos', articulos)


   const { categoryId } = useParams()
   console.log('categoryId', categoryId)



   /* llamando nombre de la categoria */
   const [categoryName, setCategoryName] = useState("");
   console.log("categoryName", categoryName)

   const { data: categories } = useApiCategory('https://serviceone.onrender.com/api-wikideas/categories')
   console.log('categories', categories)
  

   useEffect(() => {

    if(!categoryId) { //es diferente de null o undefined
        setArticulos(publications);
        setCategoryName("")
    }else{
        setArticulos(publications.filter((el) => el.categoryId === categoryId));

        if(categories) {
            const category = categories.find((category) => category._id === categoryId)
            if(category) {
                setCategoryName(category.nameCategory)
            }
        }
    }
    
   }, [categoryId, publications, categories]);

     /* llamando API de section */


   const sectionIds = articulos.map((publication) => {
    const { detail } = publication;
   return detail || []
   })

  console.log('sectionIds', sectionIds)

  

    return (
        <div>


        <div className="tituloArticulo">
                <h2 id="123">{categoryName}</h2>
        </div>

        <div className="detalleArticulo">
                <p id="456">
                  CSS (Cascading Style Sheets) es una herramienta fundamental en
                  el desarrollo de sitios web modernos. Permite separar la
                  estructura y contenido de una página web de su presentación
                  visual, lo que permite una mayor flexibilidad y control en
                  términos de diseño. Sin embargo, como con cualquier
                  herramienta, hay buenas prácticas que deben seguirse para
                  garantizar un código de calidad y una experiencia de usuario
                  óptima. En este artículo, revisaremos algunas de las mejores
                  prácticas de CSS a seguir en el desarrollo web.
                </p>
                
 
           </div>


       <ItemListCatego items={articulos} sectionIds={sectionIds}/>

        
            
        </div>
    );
}

export default ItemListId;
