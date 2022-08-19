import './findStyles.css'
import { useState } from 'react';
import styled from "styled-components";
import fondo from '../../pages/image/FrenteAVaras.png'
import { ResultadoRut } from './ResultadoRut';
import icon from './img/Vector.png'


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

export const BuscarRut = () => {

    // const [rutAlumnos, setRutAlumnos] = useState('');
    return (
        <>
            <Container>
                <img className='img-icon' src={icon} />
                <div>

                    <ResultadoRut  />
                
                </div>
            </Container>
        </>
    )
}
export default BuscarRut;
