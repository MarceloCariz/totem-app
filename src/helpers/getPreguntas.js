
import axios from 'axios';
export const obtenerPreguntas = async() =>{
    const {data} = await axios('https://totem.ivaras.cl:7002/api/preguntas');
    
    const resultado =  data.filter(function( element ) {
        return element.subcategoria !== undefined;
     });

    const subCategories = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {
       
        // console.log(final)
       
        return  {_id, categoria, subcategoria}
    }))]

    // const subsubCategories = [...new Set(resultado.map(({ subcategoria, categoria, _id})=> {
    //     return  subcategoria
    // }))]
    const categorias = [...new Set(resultado.map(({categoria, subcategoria, _id})=> {
       
        // console.log(final)
       
        return   categoria
    }))]

    let myObj = {};

    const subcategoria = subCategories.filter((ele, i)=> myObj[ele.subcategoria] ? false : myObj[ele.subcategoria] = true) ;

    // console.log(final)

    // console.log(myObj)
    
    // console.log(resultado)
    // console.log(categories)
    return {data, subcategoria, categorias};
 
}


export const buscarPreguntas = async (busqueda, nombre, sub) =>{
    const {data} = await axios(`https://totem.ivaras.cl:7002/api/preguntas/search?q=${busqueda}`);
    const {preguntas} = data;

    
    const resultado = preguntas.filter(({categoria, subcategoria})=> (categoria === nombre && subcategoria === sub))
    console.log(resultado)
      
    
    return resultado

}