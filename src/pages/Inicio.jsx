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

  return (
    <Container>
        <p>En que te puedo  ayudar</p>
       <Enlace to="preguntas">Preguntas Frecuentes</Enlace>
       <Enlace to="/">SALIR</Enlace>
    </Container>

  )
}

export default Inicio