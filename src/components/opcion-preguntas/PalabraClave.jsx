import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { aumentarRanking } from '../../helpers/getPreguntas';
import useOpciones from '../../hooks/useOpciones';
// import { Link } from 'react-router-dom';
import flecha from './icons/Flecha.png'
import barraBusqueda from './icons/barra_busqueda.png'
import busquedaIcon from './icons/busqueda_icon.png'
import './preguntas.css';
import { Logo } from './logo/Logo';
import TotiClave from '../ui/TotiClave';
import '../ui/uiStyles.css'


// const Enlace = styled(Link)`
//     text-decoration: none;
// `
const PalabraClave = () => {

    const { categoria: nombre, subcategoria: sub } = useParams();
    const navigate = useNavigate();
    const { preguntas: datos, setPreguntaSeleccionada } = useOpciones();

    const { data } = datos;
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
        setActive(!active)

        setRespuesta({ id: e._id })
        setPreguntaSeleccionada({ pregunta: e.pregunta, respuesta: e.respuesta })
        // setPreguntaSeleccionada( e.pregunta)

        aumentarRanking(e._id)
        navigate('/inicio/pregunta')
    }

    const handleInputChange = ({ target }) => {
        setBusqueda(target.value)
        filtrar(target.value);
        // console.log(resultado)
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

    // const navigate = useNavigate();

    return (
        <>
        <TotiClave/>
            <div className='div-pacl'>
                <Logo />
                <div className='name-subcat'>Ingresa una palabra clave</div>
                <DivBusqueda>
                    <input className='input-palcl' type="text" onChange={handleInputChange} value={busqueda} placeholder='Palabra Clave' />
                    <IconBusqueda src={busquedaIcon} alt="" />
                </DivBusqueda>
                <img src={barraBusqueda} alt="" />
                <Div className='example'>
                    {
                        activePreguntas === false && preguntas.length > 0 && preguntas.map(({ pregunta, respuesta, _id }) => (
                            <div key={_id} onClick={(e) => handleClick({ _id, pregunta, respuesta }, e)}>
                                <p className='resultado-sub'>{pregunta}</p>

                                <button className='btn-ver' onClick={(e) => handleClick({ _id, pregunta, respuesta }, e)}>{active && respuestaF.id === _id ? (<p>Cerrar</p>) : (<p>Respuesta</p>)}</button>
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
                            <div key={_id} onClick={(e) => handleClick({ _id, pregunta, respuesta }, e)}>
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
                </Div>
                <Flecha src={flecha} />


                {/* {
            activePreguntas && (<p>Cargando ....</p>)
        } */}
                {/* <Enlace className='btn-salir' to="/inicio/evaluacion">SALIR</Enlace> */}
            </div>
        </>
    )
}

const DivBusqueda = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
`;
const IconBusqueda = styled.img`
  width: 2.4rem;
  height: 2.4rem;  
  margin-top: 1rem;
  object-fit: contain;
`;
// const Volver = styled.button`
//   background-color: #FFB71B;
//   font-size: 2rem;
//   font-weight: 700;
//   color: black;
//   text-decoration: none;
//   position: absolute;
//   padding: 30px 50px 30px 50px;
//   margin-top: 25rem;
//   /* margin-bottom: 12rem; */
//   margin-right: 49rem;
//   margin-left: 3rem;
//   border-radius: 20px;
 
// `;
const Flecha = styled.img`
  margin-top: 1rem;
  position: relative;
  color: #FFB71B;
  font-size: 5rem;
  font-weight: 900;
`;
const Div = styled.div`
    overflow: hidden scroll;
    overflow-x: hidden;
    overflow-anchor: 1px;
    height: 650px;
    margin-top: 1rem;
`
export default PalabraClave