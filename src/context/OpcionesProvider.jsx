import { createContext, useEffect, useState } from "react";
import { obtenerPreguntas } from "../helpers/getPreguntas";




const OpcionesContext = createContext();



const OpcionesProvider =({children}) =>{
    const [preguntas, setPreguntas] = useState({data:[], categorias: {}, subcategoria: []});
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState([])


    useEffect(() => {
        const cargarPreguntas = async () =>{
            const {data, categorias, subcategoria} =  await obtenerPreguntas(); 
            setPreguntas({data, categorias, subcategoria});
            // console.log(preguntas)
        }
        cargarPreguntas();
        const interval = setInterval(()=>{
            cargarPreguntas();
          },300000);
      
          return ()=>clearInterval(interval);
    }, [])
    

    return(
        <OpcionesContext.Provider value={{preguntas, setPreguntaSeleccionada, preguntaSeleccionada}}>
            {children}
        </OpcionesContext.Provider>
    )
}

export {OpcionesProvider}

export default OpcionesContext;