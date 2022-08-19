import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import fondo from '../../pages/image/FrenteAVaras.png';
import TotiHead from '../ui/TotiHead';
import './findStyles.css';

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
  return (
    <>
      <Container>
        <TotiHead />
        <div className='div-find-start'>
          <h1 className='title-select'>Selecciona una categoría para iniciar tu búsqueda</h1>

          <ul className='forlist'>
            {/* <li className='list'>
              <p>Según datos de profesor(a)</p>
              <Link className='btn' to='f' >INGRESA NOMBRE DEL PROFESOR(A)</Link>
            </li> */}
            <li>
              <p>Según asignatura</p>
              <Link className='btn' to='buscarporrut' >INGRESA TU RUT</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  )
}
export default Encuentra;
