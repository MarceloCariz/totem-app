import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOpciones from '../../../hooks/useOpciones';
// import { Logo } from '../logo/Logo';
import logo from '../icons/logo-preguntas.png'


export const Pregunta = () => {
  const { preguntaSeleccionada ,setCategoriaEvaluacion} = useOpciones();
  const navigate = useNavigate();
  console.log(preguntaSeleccionada)
  const {pregunta, respuesta} = preguntaSeleccionada;
  const handleAddCategory = () =>{
    setCategoriaEvaluacion('preguntas')
    navigate('/inicio/evaluacion')
  }
  return (
    <Div>
            <Img src={logo} alt="" />

            <Contenedor className=''>
              <P>
              {pregunta}

              </P>
              {respuesta}
            </Contenedor>
            <Boton  onClick={handleAddCategory}>Salir</Boton>


    </Div>
  )
}
const Boton = styled.button`
margin-top: -20px;
  background-color: #FFB71B;
  padding: 1rem 5rem 1rem 5rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 24px;
  text-decoration: none;
  font-weight: 700;
`;
const P = styled.p`
  text-align:center;
  font-weight: 700;
  color: black;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  background: #D9D9D9;
  font-size: 2rem;
  font-family: sans-serif;
  padding: 3rem 5rem 3rem 5rem;
  width: 60%;
  border-radius: 20px;

`;
const Img = styled.img`
  width: 25%;
  margin-bottom: 10rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  /* font-family: sans-serif; */
  /* position: relative; */
`;