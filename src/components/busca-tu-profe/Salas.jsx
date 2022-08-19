import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import useOpciones from '../../hooks/useOpciones';
import fondo from './img/sedeblur.png'
import gotaR from './img/gotaverdeR.png';
import gotaL from './img/gotaverdeL.png';

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
            <p>{Nom_Asignatura}</p>
            <p>Se realiza en:</p>
        </Asigantura>

        <ContenedorHorario>
            <Horario>{HorInic} - {Final}</Horario>
            <img src={gotaL} alt="" />

            <A>
                <NA>{Nom_Asignatura} </NA>
                <NA>Sala: {sala}</NA>
            </A>
            <img src={gotaR} alt="" />
            {/* <Horario>Hora Termino: {Final}</Horario> */}
        </ContenedorHorario>
  
        <Img ampliar={imagen}   onTouchStart={handleEnter}  src={`https://totem.ivaras.cl:7002/salas/${sala}.png`} alt="" />
    </Div>
    </Fondo>
    
  )
}
const A = styled.div`
    font-size: 2rem;
    background-color:rgba(41, 204, 0, 0.5);
    border: 5px solid #29CC00;
    border-radius: 18px;
    padding: 2px 10px 0.1rem 10px;

    /* width: 100px; */
`;

const NA = styled.p`
font-family: sans-serif;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
`
const Horario = styled.p`
  /* background: #3f3f3fb5; */
  /* padding: 4rem 2rem 4rem 2rem; */
  /* border-radius: 30px; */
  color: rgba(41, 204, 0);
  font-family: sans-serif;
  width: auto;
  font-size: 20px;
  /* height: 1%; */
`;
const ContenedorHorario = styled.div`
  display:flex; 
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
  gap: 1rem;
  margin-bottom: 4rem;

/* height: 100px; */
`;
const Fondo = styled.div`
  background-image: url(${fondo});
  /* background: rgba(0, 0, 0, 0.28); */
  object-fit: cover;
  /* filter: blur(10px); */
  min-height: 100vh;
  background-size: 1080px 1920px;
  background-repeat: no-repeat;
  background-position: center;
`;
const  Div = styled.div`
  display: flex  ;
  background-color:rgba(0, 0, 0, 0.28);
  height: 100vh;

  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  /* padding-top: 12rem; */
  
`;
// const Div = styled.div`

//   margin-top: -11rem;

// `;
const  Asigantura = styled.div`
  color: white;
  font-family: sans-serif;
  font-weight: 700;
  height: auto;
  background: rgba(255, 183, 27, 0.5);
  border-radius: 20px 20px 0px 20px;
  padding: 1rem 4rem 10px 4rem;
  margin-top:10rem;
  /* text-transform: uppercase; */
`;
const Img = styled.img`
  width: 50%;  
  transform: ${props => props.ampliar ? 'scale(1.9)': 'none'};
`;
export default Salas