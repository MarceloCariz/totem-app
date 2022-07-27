import axios from "axios";


export const obtenerImagenes = async()=>{

    const {data} = await axios.get('https://totem.ivaras.cl:7002/api/imagenes/');
    // console.log(data);
    const imagenes  = data.filter(({active})=>{
        return active === true;
    })

    return imagenes;

}