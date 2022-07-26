import React from 'react'
import useOpciones from '../../hooks/useOpciones'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Enlace = styled(Link)`
    text-decoration: none;
`
const Preguntas = () => {

  const {preguntas} = useOpciones();
  // const {categories } = context;

  


  const {categorias} = preguntas;

  console.log(categorias)
  // const {categoria} = categorias;
  return (
    <>
      {categorias.length > 0 ? (
        categorias.map((categoria, _id)=>(
          <li key={_id}>
          <Link to={{pathname:`${categoria}`}}>{categoria}</Link>
        </li>
        ))
     
      ): 'cargando'}
      <Enlace to="/">SALIR</Enlace>
    </>
  )
}

export default Preguntas