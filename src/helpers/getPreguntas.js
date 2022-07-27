
import axios from 'axios';
export const obtenerPreguntas = async() =>{
    const {data} = await axios('http://localhost:7001/api/preguntas');
    
    const resultado =  data.filter(function( element ) {return element.subcategoria !== undefined;});
    
    const subCategories = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {       
        return  {_id, categoria, subcategoria}
    }))]

    const categorias = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {
        return   categoria
    }))]

    let myObj = {};

    const subcategoria = subCategories.filter((ele, i)=> myObj[ele.subcategoria] ? false : myObj[ele.subcategoria] = true) ;

    return {data, subcategoria, categorias};
 
}


export const buscarPreguntas = async (busqueda, nombre, sub) =>{
    const {data} = await axios(`http://localhost:7001/api/preguntas/search?q=${busqueda}`);
    const {preguntas} = data;
    const resultado = preguntas.filter(({categoria, subcategoria})=> (categoria === nombre && subcategoria === sub))
    return resultado
}


export const enviarEvaluacion= async (datos) =>{
    const {pregunta , respuesta, correo, categoria} = datos;
    const evaluacionObj = {categoria, problema:pregunta, evaluacion: respuesta, correo};
    try {
    await axios.post(`http://localhost:7001/api/preguntas/evaluacion`, evaluacionObj);
        
    } catch (error) {
        console.log(error)
}

}

export const aumentarRanking= async (id) =>{

    try {
    await axios.put(`http://localhost:7001/api/preguntas/ranking/${id}`);
        
    } catch (error) {
        console.log(error)
    }

}