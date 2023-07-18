import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UseSectionGet = (sectionId) => {

   const [data, setData] = useState(null);

   useEffect(() => {

    const fetchData = async() => {
       const url = `https://serviceone.onrender.com/api-wikideas/sections/${sectionId}`
       const result = await axios.get(url).catch((error) =>{
        console.log(error);
       });
       console.log('secciones', result.data.section)

       setData(result.data.section)
    }

    fetchData()

    
    
   }, [sectionId]);

    return (
        {data}
    );
}


