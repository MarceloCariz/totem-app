import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useOpciones from '../../hooks/useOpciones';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './preguntas.css';

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

            <div className='rectangulo' />
            <div className='div-cat'>
            <Volver onClick={()=> navigate(-1)}>Volver</Volver>

                <p className='title-cat'>Tipo de Pregunta</p>
                {
                    subcategorias.length > 0 ?
                        (
                            subcategorias.map(({ subcategoria, _id }) => {
                                return (
                                    <div key={_id}>
                                        <li>
                                            <Link className='subcategorias' to={{ pathname: `${subcategoria}` }}>{subcategoria}</Link>
                                            <div className='figura-1' />
                                            <div className='figura-2' />
                                        </li>
                                    </div>
                                )
                            })
                        )
                        : 'dsadas'
                }
                <Enlace className='btn-salir' to="/">SALIR</Enlace>
            </div>
        </>
    )
}
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