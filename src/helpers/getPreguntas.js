
import axios from 'axios';
export const obtenerPreguntas = async() =>{

    const {data} = await axios('https://totem.ivaras.cl:7002/api/preguntas');
    
    const resultado =  data.filter(function( element ) {
        return element.subcategoria !== undefined;
     });

    const categories = [...new Set(data.map(({categoria, subcategoria})=> {
        return categoria
    }))]
    

     const subcategories = [...new Set(resultado.map(({ subcategoria})=> {
        return subcategoria
    }))]

    
    // console.log(resultado)
    return {data, categories, subcategories};
 
}


export const buscarPreguntas = async (busqueda) =>{
    const {data} = await axios(`https://totem.ivaras.cl:7002/api/preguntas/search?q=${busqueda}`);
    // console.log(data)
    return data

}