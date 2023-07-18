

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UseMapSectionGet = (sectionIds) => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const promises = sectionIds.map((sectionId) =>
            axios.get(`https://serviceone.onrender.com/api-wikideas/sections/${sectionId}`)
          );
    
          try {
            const results = await Promise.all(promises);
            const sections = results.map((result) => result.data.section);
            setData(sections);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [sectionIds]);


    return (
      {data}
    );
}


