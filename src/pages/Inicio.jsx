import styled from "styled-components";
// import CardResultado from '../components/preguntas/CardResultado';
// import OpcionPreguntas from '../components/preguntas/OpcionPreguntas';
// import { buscarPreguntas, obtenerPreguntas } from '../helpers/getPreguntas';
import { Link } from "react-router-dom";
// import { Footer } from "../components/ui/Footer";
import fondo from './image/FrenteAVaras.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
 background-size: 1920px 1920px;
 background-position: center;
`;

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;
// const Volver = styled(Link)`
//   background-color: #FFB71B;
//   font-size: 2rem;
//   font-weight: 700;
//   color: black;
//   text-decoration: none;
//   position: absolute;
//   padding: 30px 50px 30px 50px;
//   margin-top: 26rem;
//   margin-right: 49rem;

//   border-radius: 20px;
 
// `;
const Inicio = () => {
  
  // const idleTimer = useIdleTimer({ onIdle, onActive });
  // console.log(object)

  return (
    <>
      <Container className="">
        {/* <div className="rectangulo" /> */}
        {/* <Volver to={'/'}>Volver</Volver> */}

        <p className="p-inicio">En que te puedo ayudar</p>
        <div className="div-inicio">
          <Enlace className="preg-frec" to="preguntas">
            Preguntas Frecuentes
          </Enlace>
          
        </div>

        {/* <Enlace className="btn-salir-inicio" to="/">
          SALIR
        </Enlace> */}
      </Container>
      {/* <Div>

      </Div> */}
    
    </>
      
  );
};

// const Div = styled.div`
//   position: relative;
//   bottom: 0;
//   margin-top: 125%;
// `;

export default Inicio;
