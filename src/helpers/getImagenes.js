import axios from "axios";


export const obtenerImagenes = async()=>{

    const {data} = await axios.get('http://localhost:4000/api/imagenes/');
    // console.log(data);

    return data;

}