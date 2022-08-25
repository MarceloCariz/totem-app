import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fondo from './img/frentesedeblur.png'

import TotiHead from '../ui/TotiHead';
import './findStyles.css';
import { NumericPad } from '../pad-numerico/NumericPad';
import { getAlumno } from '../../helpers/getRut';
import useOpciones from '../../hooks/useOpciones';
import { Keyboard } from '../teclado/Keyboard';
import { getDocente } from '../../helpers/getProfesor';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
  background-size: 1080px 1920px;
  background-position: center;
`;




export const Encuentra = () => {

  const [rutAlumnos, setRutAlumnos] = useState('');
  const [active, setActive] = useState(false);
  const [numpad, SetNumpad] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const { setTituloAlumno, tituloAlumno, setProfe, profe } = useOpciones();
  const navigate = useNavigate();

  const onChangeProfe = (e) => {
    const value = e.target.value;
    setProfe(value);
    if (e.target.value === '') {
      setActive(false)
      setProfe({})
    }
  }


  const onChangeRut = (e) => {
    const value = e.target.value;
    setRutAlumnos(value);
    if (e.target.value === '') {
      setActive(false)
      setTituloAlumno({})
    }
  }

  const activeNumpad = () => {
    SetNumpad(!numpad);
    console.log(numpad)

  }
  const activeKeyboard = () => {
    setKeyboard(!keyboard);
    console.log(keyboard)
  }

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const { docente } = await getDocente(profe);
    setProfe(docente);
    navigate('resultado')
  }

  const handleSubmitRut = async (e) => {
    e.preventDefault();
    const { respAlumno, docente } = await getAlumno(rutAlumnos);
    setProfe(docente);
    setTituloAlumno({
      Nombre_Alumno: respAlumno.Nombre_Alumno,
      Apellido_Paterno_Alumno: respAlumno.Apellido_Paterno_Alumno,
      Apellido_Materno_Alumno: respAlumno.Apellido_Materno_Alumno
    })
    navigate('resultado')
  }
  return (
    <>
      <Container>
        <TotiHead />
        <div className='div-find-start'>
          <h1 className='title-select'>Selecciona una categoría para iniciar tu búsqueda</h1>

          <Contenedor className='contenedor-form'>
            
              <form className='formulario-docente' onSubmit={handleSubmitName}>
                <p className='titulo-docente'>Según datos de profesor(a)</p>
                <Input1 negro={keyboard} onClick={activeKeyboard} type='text' readOnly onChange={onChangeProfe} value={keyboard ? profe : 'INGRESA NOMBRE DEL PROFESOR(A)'} />
              </form>
              {
                keyboard ?
                  (<div
                    className='keyboard'>
                    {
                      <Keyboard setNameDocente={setProfe} nameDocente={profe} activeKeyboard={activeKeyboard} submit={handleSubmitName} />
                    }

                  </div>) : ''
              }

              <form className='fomulario-rut' onSubmit={handleSubmitRut}>
                <P className='titulo-rut'>Según asignatura</P>
                <Input negro={numpad} onClick={activeNumpad} type="text" readOnly onChange={onChangeRut} value={numpad ? rutAlumnos : 'INGRESA TU RUT'}
                  maxLength={9} />
              </form>
              {
                numpad ?
                  (<div
                    className="pad-numerico"
                  >
                    {
                      <NumericPad setRutAlumnos={setRutAlumnos} rutAlumnos={rutAlumnos} activeNumpad={activeNumpad} submit={handleSubmitRut} />
                    }

                  </div>) : ''
              }
          </Contenedor>
        </div>
      </Container>
    </>
  )
}
const Input = styled.input`
 position: absolute;
width: 772px;
height: 104px;
left: 154px;
top: 1139px;
text-align: center;
color: ${props => props.negro ? 'black' : 'rgba(0, 0, 0, 0.2)'};
text-transform: uppercase;
font-weight: 800;
font-size: 28px;
background: rgba(255, 255, 255, 0.59);
border-radius: 22px;
`;
const Input1 = styled.input`
 position: absolute;
width: 772px;
height: 104px;
left: 154px;
top: 939px;
text-align: center;
color: ${props => props.negro ? 'black' : 'rgba(0, 0, 0, 0.2)'};
text-transform: uppercase;
font-weight: 800;
font-size: 28px;
background: rgba(255, 255, 255, 0.59);
border-radius: 22px;
`;
const P = styled.p`
width: 483px;
height: 44px;
font-weight: 700;
font-size: 36px;
line-height: 44px;
color: #FFFFFF;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`
export default Encuentra;
