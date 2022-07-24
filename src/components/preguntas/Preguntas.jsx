import React, { useState } from 'react'
import styled from 'styled-components'



const P = styled.p`
    /* display:none; */
`;
const Preguntas = ({data}) => {
    // console.log(data)
    const [activo, setActivo] = useState(false)
    const [respuestaF, setRespuestaF] = useState('')
    const handleClick = (e) =>{
        setActivo(!activo)
        // P.display = 'block'

        setRespuestaF(e)
    }
  return (
    <div >
        {data.map(({_id, pregunta, respuesta})=>
        (   
            <div onClick={(e) => handleClick({_id, respuesta}, e)}  key={_id}>
                <p >{pregunta}</p>
                <P>{respuestaF._id === _id ? respuesta : ''}</P>
            </div>
        ))}
        
    </div>
  )
}

export default Preguntas