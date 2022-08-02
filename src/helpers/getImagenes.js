import clienteAxios from "../axios";


export const obtenerImagenes = async()=>{

    const {data} = await clienteAxios('/imagenes/');
    // console.log(data);
    const imagenes  = data.filter(({active})=>{
        return active === true;
    })

    return imagenes;

}