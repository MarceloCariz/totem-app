import { createContext, useEffect, useState } from "react";
import { obtenerPreguntas } from "../helpers/getPreguntas";




const OpcionesContext = createContext();



const OpcionesProvider =({children}) =>{
    const [preguntas, setPreguntas] = useState({data:[], categorias: {}, subcategoria: []});
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState([]);
    const [asignatura, setAsignatura] = useState([])
    const [profe, setProfe] = useState(['']);
    const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });


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
        <OpcionesContext.Provider value={{preguntas, setPreguntaSeleccionada, preguntaSeleccionada, setAsignatura, asignatura,
            setTituloAlumno, tituloAlumno, setProfe, profe
        
        }}>
            {children}
        </OpcionesContext.Provider>
    )
}

export {OpcionesProvider}

export default OpcionesContext;