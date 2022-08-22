import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useOpciones from '../../hooks/useOpciones';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import flecha from './icons/Flecha.png'

import './preguntas.css';
import { Logo } from './logo/Logo';
// import { Footer } from '../ui/Footer';

const Enlace = styled(Link)`
    text-decoration: none;
`
const Categorias = () => {
    const navigate = useNavigate();
    const { categoria: categoriaParams } = useParams();
    const { preguntas } = useOpciones();
    const { subcategoria } = preguntas;



    const [subcategorias, setSubCategorias] = useState({});
    // console.log(subcategoria)

    useEffect(() => {
        const comprobar = async () => {
            let resultado = subcategoria.filter(({ categoria }) => { return categoria === categoriaParams })
            //  resultado
            setSubCategorias(resultado)
            //  console.log(subcategorias)

        }
        comprobar();
    }, [subcategoria, categoriaParams])

    return (
        <>
            <div className='div-cat'>
                <Logo />

                <p className='title-cat'>Tipo de Pregunta</p>
                <Divsub>
                    {
                        subcategorias.length > 0 ?
                            (
                                subcategorias.map(({ subcategoria, _id }) => {
                                    return (
                                        <div key={_id}>
                                            <li>
                                                <Div>
                                                    <Link className='subcategorias ' to={{ pathname: `${subcategoria}` }}>
                                                        <p className='texto'>{subcategoria}</p>         
                                                    </Link>
                                                    <Flecha src={flecha} />

                                                </Div>
                                                <div className='figura-1' />
                                                <div className='figura-2' />
                                            </li>
                                        </div>
                                    )
                                })
                            )
                            : 'dsadas'
                    }
                </Divsub>
                <Flecha src={flecha} />

                {/* <Enlace className='btn-salir' to="/">SALIR</Enlace> */}

            </div>
        </>
    )
}
const Divsub = styled.div`
    overflow: hidden scroll;
    overflow-x: hidden;
    overflow-anchor: 1px;
    height: 600px;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;
const Div = styled.div`
  display: flex;
  gap: 8rem;
  justify-content: center;
  align-items:center;
  /* text-transform: lowercase ;    */
  
`;


const Flecha = styled.img`
  /* margin-top: 1rem; */
  position: relative;
  color: #FFB71B;
  width: 8%;
  height: 10%;
`;
const Volver = styled.button`
  background-color: #FFB71B;
  font-size: 2rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  position: absolute;
  padding: 30px 50px 30px 50px;
  margin-bottom: 70rem;
  margin-right: 49rem;
  margin-left: 3rem;
  border-radius: 20px;
 
`;
export default Categorias