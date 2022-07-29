import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useOpciones from '../../hooks/useOpciones';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './preguntas.css';

const Enlace = styled(Link)`
    text-decoration: none;
`
const Categorias = () => {

    const { categoria: categoriaParams } = useParams();
    const { preguntas } = useOpciones();
    const { subcategoria } = preguntas;



    const [subcategorias, setSubCategorias] = useState({});
    // console.log(subcategoria)

    useEffect(() => {
        const comprobar = async () => {
            let resultado = subcategoria.filter(({ categoria }) => { return categoria === categoriaParams })
            //  resultado
            console.log(resultado)
            setSubCategorias(resultado)
            //  console.log(subcategorias)

        }
        comprobar();
    }, [subcategoria, categoriaParams])

    return (
        <>

            <div className='rectangulo' />
            <div className='div-cat'>
                <p className='title-cat'>{categoriaParams}</p>
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

export default Categorias