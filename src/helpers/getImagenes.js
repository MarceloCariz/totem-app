import axios from "axios";


export const obtenerImagenes = async()=>{

    const {data} = await axios.get('http://localhost:7001/api/imagenes/');
    // console.log(data);
    const imagenes  = data.filter(({active})=>{
        return active === true;
    })

    return imagenes;

}