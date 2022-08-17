import React, { useState } from 'react'
import useOpciones from '../../hooks/useOpciones'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './preguntas.css';
import { Logo } from './logo/Logo';
import flecha from './icons/Flecha.png';
import barraBusqueda from './icons/barra_busqueda.png'
import busquedaIcon from './icons/busqueda_icon.png'


const Preguntas = () => {
  const [busqueda, setBusqueda] = useState('');
  const [resultado, setResultado] = useState({})
  const [activePreguntas, setActivePreguntas] = useState(false)
  const { preguntas } = useOpciones();
  const { categorias } = preguntas;
  const handleInputChange = ({ target }) => {
    setBusqueda(target.value)
    filtrar(target.value);
    setActivePreguntas(true)
    if (target.value === '') {
      setActivePreguntas(false)
    }
  }

  const filtrar = (terminoBusqueda) => {

    if (!categorias) {
      return;
    }
    // console.log(categorias));
    let resultadoBusqueda = categorias.filter((elemento) => {
      if (elemento.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        // return elemento
        return elemento;
      }
    });
    // setProductos(resultadoBusqueda);
    console.log(resultado)
    setResultado(resultadoBusqueda)
  }
  return (
    <>
      {/* <Volver onClick={()=> navigate(-1)}>Volver</Volver> */}


      <div className='div-pre'>
        {/* <div className='rectangulo' /> */}
        <Logo />


        <p className='preg'>¿EN QUÉ TE PUEDO AYUDAR?</p>
        <DivBusqueda>
          <input className='input-palcl' onChange={handleInputChange} value={busqueda} type="text" placeholder='Ingrese la categoria' />
          <IconBusqueda src={busquedaIcon} alt="" />
        </DivBusqueda>
        <img src={barraBusqueda} alt="" />

        <Div className='example'>

          {activePreguntas === false && categorias.length > 0 && (
            categorias.map((categoria, _id) => (
              <li className='preguntas-li' key={_id}>
                <Categorias className='name-cat' to={{ pathname: `${categoria}` }}>{categoria}</Categorias>
              </li>
            ))
          )}

          {activePreguntas === true && resultado.length > 0 && (
            resultado.map((categoria, _id) => (
              <li className='preguntas-li' key={_id}>
                <Categorias className='name-cat' to={{ pathname: `${categoria}` }}>{categoria}</Categorias>
              </li>
            ))
          )}

        </Div>
        <Flecha src={flecha} />
      </div>

    </>
  )
}
const Div = styled.div`
    overflow: hidden scroll;
    overflow-x: hidden;
    overflow-anchor: 1px;
    height: 700px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
const Flecha = styled.img`
  margin-top: 1rem;
  position: relative;
  color: #FFB71B;
  font-size: 5rem;
  font-weight: 900;
`;

const DivBusqueda = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
`;

const IconBusqueda = styled.img`
  width: 3.4rem;
  height: 3.4rem;  
  margin-top: 1rem;
  object-fit: contain;
`;

// const Enlace = styled(Link)`
//     text-decoration: none;
// `

const Categorias = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
`;

// const Volver = styled.button`
//   background-color: #FFB71B;
//   font-size: 2rem;
//   font-weight: 700;
//   color: black;
//   text-decoration: none;
//   position: absolute;
//   padding: 30px 50px 30px 50px;
//   margin-top: 26rem;
//   /* margin-right: 45rem; */
//   margin-left: 3rem;
//   border-radius: 20px;

// `;
export default Preguntas