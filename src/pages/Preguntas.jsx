import React, { useEffect, useState } from 'react'
import { obtenerPreguntas } from '../helpers/getPreguntas';

const Preguntas = () => {

    const [preguntas, setPreguntas] = useState({});

    useEffect(()=>{
        const cargarPreguntas = async () =>{
            const resultado = await  obtenerPreguntas()
            setPreguntas(resultado);
        }
        cargarPreguntas();
    },[])

    console.log(preguntas)
  return (
    <>
    
    {
        preguntas ? preguntas.map((pregunta, i)=>{
            return(
                <div key={i}>
                    <p>{pregunta.pregunta}</p>
                    <p>{pregunta.respuesta}</p>

                </div>
            )
        }) : 'Cargando'
    }
    </>

  )
}

export default Preguntas