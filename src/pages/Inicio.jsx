import styled from 'styled-components';
// import CardResultado from '../components/preguntas/CardResultado';
// import OpcionPreguntas from '../components/preguntas/OpcionPreguntas';
// import { buscarPreguntas, obtenerPreguntas } from '../helpers/getPreguntas';
import {Link} from 'react-router-dom';





const Container = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
`;

// const Form = styled.form`
//     margin-top: 2rem;
// `;
const Enlace = styled(Link)`
    text-decoration: none;
`

const Inicio = () => {

    // const [preguntas, setPreguntas] = useState({});
    // const [busqueda, setBusqueda] = useState('');
    // const [resultado, setResultado] = useState({})
    // const [categorias, setCategorias] = useState({})
    // const [subcategorias, setSubcategorias] = useState({})


    // useEffect(()=>{
    //     const cargarPreguntas = async () =>{
    //         const {data, categories, subcategories} =  await obtenerPreguntas();
    //         // const {categoria}
          
    //         setPreguntas(data);
    //         setCategorias(categories);
    //         setSubcategorias(subcategories);
    //     }
    //     cargarPreguntas();
    // },[])


    // const handleInputChange = (e) =>{
    //     setBusqueda(e.target.value)
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     if(busqueda.length < 3){
    //         console.log('Ingrese un valor');
    //         return
    //     }
    //     const obtenerResultado = async()=>{
    //         const respuesta = await buscarPreguntas(busqueda);
    //         setResultado(respuesta);
    //     }

    //     obtenerResultado();
      
    // }

  return (
    <Container>

        {/* <Form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange}  value={busqueda } />
            <button type='submit'>Buscar</button>
        </Form>

        <CardResultado resultado={resultado}/>
        <OpcionPreguntas categorias={categorias} subcategorias={subcategorias} preguntas={preguntas}/> */}
        <p>En que te puedo  ayudar</p>
       <Enlace to="preguntas">Preguntas Frecuentes</Enlace>
       <Enlace to="/">SALIR</Enlace>

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

export default Inicio