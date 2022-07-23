
import axios from 'axios';
import biblioteca from '../data/biblioteca.json'
export const obtenerPreguntas = async() =>{

    const {data} = await axios('https://totem.ivaras.cl:7002/api/preguntas');
    
    
    return data;
 
}


export const buscarPreguntas = async (busqueda) =>{
    const {data} = await axios(`https://totem.ivaras.cl:7002/api/preguntas/search?q=${busqueda}`);
    // console.log(data)
    return data

}