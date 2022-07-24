import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CardResultado from '../components/preguntas/CardResultado';
import OpcionPreguntas from '../components/preguntas/OpcionPreguntas';
import { buscarPreguntas, obtenerPreguntas } from '../helpers/getPreguntas';






const Container = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
`;

const Form = styled.form`
    margin-top: 2rem;
`;

const Preguntas = () => {

    const [preguntas, setPreguntas] = useState({});
    const [busqueda, setBusqueda] = useState('');
    const [resultado, setResultado] = useState({})
    const [categorias, setCategorias] = useState({})
    const [subcategorias, setSubcategorias] = useState({})


    useEffect(()=>{
        const cargarPreguntas = async () =>{
            const resultado = await  obtenerPreguntas()
            const data = resultado.filter(function( element ) {
                return element.subcategoria !== undefined;
             });
            const categories = [...new Set(resultado.map(({categoria, subcategoria})=> {
                return categoria
            }))]
            

             const subcategories = [...new Set(data.map(({ subcategoria})=> {
                return subcategoria
            }))]
            setPreguntas(resultado);
            setCategorias(categories);
            setSubcategorias(subcategories);
        }
        cargarPreguntas();
    },[])


    const handleInputChange = (e) =>{
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(busqueda.length < 3){
            console.log('Ingrese un valor');
            return
        }
        const obtenerResultado = async()=>{
            const respuesta = await buscarPreguntas(busqueda);
            setResultado(respuesta);
        }

        obtenerResultado();
      
    }

  return (
    <Container>

        <Form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange}  value={busqueda } />
            <button type='submit'>Buscar</button>
        </Form>

        <CardResultado resultado={resultado}/>
        <OpcionPreguntas categorias={categorias} subcategorias={subcategorias} preguntas={preguntas}/>
       
{/* 
    {
        preguntas.length ? preguntas.map((pregunta, i)=>{
            return(
                <div key={i}>
                    <p>{pregunta.pregunta}</p>

                </div>
            )
        }) : 'Cargando'
    } */}
    </Container>

  )
}

export default Preguntas