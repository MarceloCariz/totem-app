import React from 'react'
import useOpciones from '../../hooks/useOpciones'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './preguntas.css';

const Enlace = styled(Link)`
    text-decoration: none;
`

const Categorias = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
`

const Volver = styled.button`
  background-color: #FFB71B;
  font-size: 2rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  position: absolute;
  padding: 30px 50px 30px 50px;
  margin-top: 26rem;
  /* margin-right: 45rem; */
  margin-left: 3rem;
  border-radius: 20px;
 
`;
const Preguntas = () => {

  const { preguntas } = useOpciones();
  // const {categories } = context;

  const navigate = useNavigate()


  const { categorias } = preguntas;

  // const {categoria} = categorias;
  return (
    <>
        <Volver onClick={()=> navigate(-1)}>Volver</Volver>

      <div className='div-pre'>
        <div className='rectangulo' />

        <p className='preg'>¿EN QUÉ TE PUEDO AYUDAR?</p>
        {categorias.length > 0 ? (
          categorias.map((categoria, _id) => (
            <li className='preguntas-li' key={_id}>
              <Categorias className='name-cat' to={{ pathname: `${categoria}` }}>{categoria}</Categorias>
            </li>
          ))
        ) : 'cargando'}
        <Enlace className='btn-salir' to="/">SALIR</Enlace>
      </div>
    </>
  )
}

export default Preguntas