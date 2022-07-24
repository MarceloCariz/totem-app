import React, { useState } from 'react'
import styled from 'styled-components'



const P = styled.p`
    /* display:none; */
   width: auto;
   /* padding: 12px 0px 12px 12px; */
   padding-left: 12px;
`;

const Titulo = styled.p`
    /* display:none; */
   width: auto;
   /* padding: 12px 0px 12px 12px; */
   text-align: center;
   font-size: 1rem;
   font-weight: 700;
   text-transform: capitalize;
`;
const PR = styled.p`
    width: auto;
    background-color: #012c56;
    color: white;
    padding: 12px 0px 12px 12px;
  border-radius: 20px;

    /* padding: 1rem 2rem; */
`;
const Div = styled.div`
   width: auto ;
   background-color: #ffffff;
   overflow-y: scroll ; 
   overflow-x: hidden;
   height: 20rem;
   padding:  12px 8px 12px 8px;

  
` ;
const Preguntas = ({data}) => {
    const [activo, setActivo] = useState(false)
    const [respuestaF, setRespuestaF] = useState('')


    const handleClick = (e) =>{
        setActivo(!activo)
        // P.display = 'block'

        setRespuestaF(e)
    }
  return (
    <Div >
        <Titulo>{data[0].categoria}</Titulo>
        {data.map(({_id, pregunta, respuesta})=>
        (   
            <div onClick={(e) => handleClick({_id, respuesta}, e)}  key={_id}>
                <PR>{pregunta}</PR>
                {activo &&
                <P>{respuestaF._id === _id ? respuesta : ''}</P>
                
                }
            </div>
        ))}
        
    </Div>
  )
}

export default Preguntas