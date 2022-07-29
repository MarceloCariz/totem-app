import React from 'react'
import useOpciones from '../../hooks/useOpciones'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './preguntas.css';

const Enlace = styled(Link)`
    text-decoration: none;
`
const Preguntas = () => {

  const { preguntas } = useOpciones();
  // const {categories } = context;




  const { categorias } = preguntas;

  console.log(categorias)
  // const {categoria} = categorias;
  return (
    <>
      <div className='div-pre'>
        <div className='rectangulo' />
        <p className='preg'>¿EN QUÉ TE PUEDO AYUDAR?</p>
        {categorias.length > 0 ? (
          categorias.map((categoria, _id) => (
            <li className='preguntas-li' key={_id}>
              <Link className='name-cat' to={{ pathname: `${categoria}` }}>{categoria}</Link>
            </li>
          ))
        ) : 'cargando'}
        <Enlace className='btn-salir' to="/">SALIR</Enlace>
      </div>
    </>
  )
}

export default Preguntas