import axios from "axios";


 export const useTitlePost = () => {

    const postRequest = async  (url, data) => {
        try{
            const response = await axios.post(url, data);
            console.log('response', response)
            console.log('ver data', response.data)
            return response.data;
        } catch (error) {
            console.log("error al realizar la solicitud:", error);
            throw error; //O manejar el error de manera adecuada
        }
    }
    
return({postRequest})
  
}; 