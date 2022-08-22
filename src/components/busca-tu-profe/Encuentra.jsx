import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fondo from './img/frentesedeblur.png'

import TotiHead from '../ui/TotiHead';
import './findStyles.css';
import { NumericPad } from '../pad-numerico/NumericPad';
import { getAlumno } from '../../helpers/getRut';
import useOpciones from '../../hooks/useOpciones';

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
  const [active, setActive] = useState(false)
  const [numpad, SetNumpad ] = useState(false)
  // const [profe, setProfe] = useState(['']);
  // const [tituloAlumno, setTituloAlumno] = useState({ Nombre_Alumno: '', Apellido_Paterno_Alumno: '', Apellido_Materno_Alumno: '' });
  const { setTituloAlumno, tituloAlumno, setProfe, profe} = useOpciones();
  const navigate = useNavigate();
  const onChangeRut = (e) => {
    const value = e.target.value;
    setRutAlumnos(value);
    if (e.target.value === '') {
        setActive(false)
        setTituloAlumno({})
    }
  }

  const activeNumpad = () =>{
    SetNumpad(!numpad);
  console.log(numpad)

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

          <Contenedor >
            {/* <li className='list'>
              <p>Según datos de profesor(a)</p>
              <Link className='btn' to='f' >INGRESA NOMBRE DEL PROFESOR(A)</Link>
            </li> */}
            
            <form onSubmit={handleSubmitRut}>
            <P>Según asignatura</P>
              {/* <Link  to='buscarporrut' > */}
                <Input negro={numpad} onClick={activeNumpad} type="text" onChange={onChangeRut}   value={numpad ?rutAlumnos : 'INGRESA TU RUT'}
                        maxLength={9} />
              {/* </Link> */}
            </form>
            {
              numpad  ?
              (<div
              className="pad-numerico"
              >
              {
                   <NumericPad setRutAlumnos={setRutAlumnos} rutAlumnos={rutAlumnos} activeNumpad={activeNumpad} submit={handleSubmitRut}/> 
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
top: 1039px;
text-align: center;
/* color: rgba(0, 0, 0, 0.2) ;
 */
color: ${props => props.negro ? 'black': 'rgba(0, 0, 0, 0.2)'};
text-transform: uppercase;
font-weight: 800;
font-size: 28px;
background: rgba(255, 255, 255, 0.59);
border-radius: 22px;
`;
const P = styled.p`
position: absolute;
width: 483px;
height: 44px;
left: 299px;
top: 950px;
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
