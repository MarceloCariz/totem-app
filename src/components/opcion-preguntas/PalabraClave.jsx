import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { aumentarRanking, buscarPreguntas } from '../../helpers/getPreguntas';
import useOpciones from '../../hooks/useOpciones';
import CardResultado from './CardResultado';
import {Link} from 'react-router-dom';


const Enlace = styled(Link)`
    text-decoration: none;
`
const PalabraClave = () => {

    const {categoria:nombre, subcategoria: sub} = useParams();
    const {preguntas: datos, setPreguntaSeleccionada} = useOpciones();
   
    const {data} = datos;
    const [preguntas, setPreguntas] = useState({})
    const [respuestaF, setRespuesta] = useState({id: ''})
    const [active, setActive] = useState(false)
    const [activePreguntas, setActivePreguntas] = useState(true)

    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState({})

    useEffect(()=>{
        const filtrado = () =>{
            const resultado = data.filter(({categoria, subcategoria})=> (categoria === nombre && subcategoria === sub))
            setPreguntas(resultado)
        }
        filtrado()
        
    },[data,nombre, sub]) 


    const handleClick = (e) =>{
        setActive(true)

        setRespuesta({id: e._id})
        setPreguntaSeleccionada(e.pregunta)
        // Aumentar ranking
        aumentarRanking(e._id)
    }

    const handleInputChange = (e) =>{
        setBusqueda(e.target.value)
        setActivePreguntas(false)
        setActive(false)
        if(e.target.value === ''){
            setActivePreguntas(true)
            setResultado({})
        }
    }

    const handleBuscar = (e) =>{
        e.preventDefault();
        e.preventDefault();
        if(busqueda.length < 3){
            console.log('Ingrese un valor');
            return
        }
        const obtenerResultado = async()=>{
            const respuesta = await buscarPreguntas(busqueda,nombre, sub);
            setResultado(respuesta);
        }
        obtenerResultado();
        setActivePreguntas(false)

        // console.log(active)
    }
  return (
    <>
        <div>{nombre}</div>
        <form action="" onSubmit={handleBuscar}>
        <input type="text" onChange={handleInputChange}  value={busqueda }  placeholder='palabra Clave'/>
        <CardResultado resultado={resultado} handleClick={handleClick} respuestaF={respuestaF} active={active}/>
        </form>
      
        {
            activePreguntas  &&  preguntas.length > 0 && preguntas.map(({pregunta,respuesta, _id})=>(
                <div key={_id}> 
                <p>{pregunta}</p>

                <button onClick={(e)=> handleClick({_id, pregunta}, e)}>{active && respuestaF.id === _id ? (<p>Cerrar</p>) : (<p>Ver</p>)}</button>
                {
                    active &&  (
                        <p>{respuestaF.id === _id ? respuesta : ""}</p>
                    )
                }

                </div>
            ))
           
        }
        {/* {
            activePreguntas && (<p>Cargando ....</p>)
        } */}
       <Enlace to="/inicio/evaluacion">SALIR</Enlace>
   
    </>
  )
}

export default PalabraClave