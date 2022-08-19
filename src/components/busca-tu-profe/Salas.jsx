import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import useOpciones from '../../hooks/useOpciones';
import fondo from '../../pages/image/FrenteAVaras.png'
const Salas = () => {
    const [imagen, setImagen] = useState(false)
    const {asignatura} = useOpciones();
    // console.log(asignatura)
    const {Aula, Nom_Asignatura, Final, HorInic}= asignatura;
    const sala = Aula.replace('AV-','').trim();
    // console.log(sala)

    const handleEnter = () =>{
        setImagen(true)
        console.log('1')
    }

    const handleLeave = () =>{
        setImagen(false)
        console.log('2')
    }
  return (
    <Fondo>
<Div onTouchEnd={handleLeave}>
        <Asigantura>
        <h1>{Nom_Asignatura}</h1>
        <p>Se realiza en: Sala {sala}</p>
        </Asigantura>
        <ContenedorHorario>
            <Horario>Hora Inicio: {HorInic}</Horario>
            <Horario>Hora Termino: {Final}</Horario>

        </ContenedorHorario>
  
        <Img ampliar={imagen}   onTouchStart={handleEnter}  src={`https://totem.ivaras.cl:7002/salas/${sala}.png`} alt="" />
    </Div>
    </Fondo>
    
  )
}
const Horario = styled.p`
  background: #3f3f3fb5;
  padding: 4rem 2rem 4rem 2rem;
  border-radius: 20px;
  font-family: sans-serif;
`;
const ContenedorHorario = styled.div`
  display:flex; 
  gap: 10px; 
`;
const Fondo = styled.div`
      background-image: url(${fondo});
  object-fit: cover;
  min-height: 100vh;
  background-size: 1080px 1920px;
 background-position: center;
`;
const  Div = styled.div`
  display: flex  ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 12rem;
  
`;
// const Div = styled.div`

//   margin-top: -11rem;

// `;
const  Asigantura = styled.div`
  color: white;
  font-family: sans-serif;
  font-weight: 700;
  height: 10%;
  background: rgba(255, 183, 27, 0.7);
  border-radius: 20px 20px 0px 20px;
  padding: 2rem 1rem 2rem 1rem;
  /* text-transform: uppercase; */
`;
const Img = styled.img`
  width: 50%;  
  transform: ${props => props.ampliar ? 'scale(1.9)': 'none'};
`;
export default Salas