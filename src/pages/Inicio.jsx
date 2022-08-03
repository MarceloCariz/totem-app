import styled from "styled-components";
// import CardResultado from '../components/preguntas/CardResultado';
// import OpcionPreguntas from '../components/preguntas/OpcionPreguntas';
// import { buscarPreguntas, obtenerPreguntas } from '../helpers/getPreguntas';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Enlace = styled(Link)`
  text-decoration: none;
`;

const Inicio = () => {
  
  // const idleTimer = useIdleTimer({ onIdle, onActive });
  // console.log(object)

  return (
      <Container className="cont-inicio">
        <div className="rectangulo" />
        <p className="p-inicio">En que te puedo ayudar</p>
        <div className="div-inicio">
          <Enlace className="preg-frec" to="preguntas">
            Preguntas Frecuentes
          </Enlace>
        </div>
        <Enlace className="btn-salir-inicio" to="/">
          SALIR
        </Enlace>
      </Container>
  );
};

export default Inicio;
