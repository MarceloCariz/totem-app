import React from 'react'
import useOpciones from '../../hooks/useOpciones'
import {Link} from 'react-router-dom';
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
    </>
  )
}

export default Preguntas