import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { aumentarRanking, buscarPreguntas } from '../../helpers/getPreguntas';
import useOpciones from '../../hooks/useOpciones';
import CardResultado from './CardResultado';
import { Link } from 'react-router-dom';
import './preguntas.css';


const Enlace = styled(Link)`
    text-decoration: none;
`
const PalabraClave = () => {

    const {categoria:nombre, subcategoria: sub} = useParams();
    const {preguntas: datos, setPreguntaSeleccionada} = useOpciones();
   
    const {data} = datos;
    const [preguntas, setPreguntas] = useState({})
    const [respuestaF, setRespuesta] = useState({ id: '' })
    const [active, setActive] = useState(false)
    const [activePreguntas, setActivePreguntas] = useState(false)

    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState({})

    useEffect(() => {
        const filtrado = () => {
            const resultado = data.filter(({ categoria, subcategoria }) => (categoria === nombre && subcategoria === sub))
            setPreguntas(resultado)
        }
        filtrado()

    }, [data, nombre, sub])

    const handleClick = (e) => {
        setActive(true)

        setRespuesta({ id: e._id })
        setPreguntaSeleccionada(e.pregunta)
        aumentarRanking(e._id)
    }

    const handleInputChange = ({target}) => {
        setBusqueda(target.value)
        filtrar(target.value);
        console.log(resultado)
        setActivePreguntas(true)
        if (target.value === '') {
            setActivePreguntas(false)
        }
    }

 


    const filtrar = (terminoBusqueda) => {

        if (!preguntas) {
            return;
        }
        // console.log(preguntas));
        let resultadoBusqueda = preguntas.filter((elemento) => {
            if (elemento.pregunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento

            }
        });
        // setProductos(resultadoBusqueda);
        setResultado(resultadoBusqueda)
    }
    return (
        <>
            <div className='rectangulo' />
            <div className='div-pacl'>
                <div className='name-subcat'>{nombre}</div>
                {/* <form action="" >
                    <CardResultado resultado={resultado} handleClick={handleClick} respuestaF={respuestaF} active={active} />
                </form> */}

                <input className='input-palcl' type="text" onChange={handleInputChange} value={busqueda} placeholder='Palabra Clave' />
                {
                    activePreguntas === false && preguntas.length > 0 && preguntas.map(({ pregunta, respuesta, _id }) => (
                        <div key={_id}>
                            <p className='resultado-sub'>{pregunta}</p>

                            <button className='btn-ver' onClick={(e) => handleClick({ _id, pregunta }, e)}>{active && respuestaF.id === _id ? (<p>Cerrar</p>) : (<p>Respuesta</p>)}</button>
                            {
                                active && respuestaF.id === _id && (
                                    <p className='resp-cate'>{respuestaF.id === _id ? respuesta : ""}</p>
                                )
                            }

                        </div>
                    )) 

                }
                {
                    activePreguntas === true && resultado.length > 0 && resultado.map(({ pregunta, respuesta, _id }) => (
                        <div key={_id}>
                            <p className='resultado-sub'>{pregunta}</p>

                            <button className='btn-ver' onClick={(e) => handleClick({ _id, pregunta }, e)}>{active && respuestaF.id === _id ? (<p>Cerrar</p>) : (<p>Respuesta</p>)}</button>
                            {
                                active && respuestaF.id === _id &&(
                                    <p className='resp-cate'>{respuestaF.id === _id ? respuesta : ""}</p>
                                )
                            }

                        </div>
                    )) 

                }

                
                {/* {
            activePreguntas && (<p>Cargando ....</p>)
        } */}
                <Enlace className='btn-salir' to="/inicio/evaluacion">SALIR</Enlace>
            </div>
        </>
    )
}

export default PalabraClave