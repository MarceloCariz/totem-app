import styled from "styled-components";
import { Link } from "react-router-dom";
import fondo from '../pages/image/FrenteAVaras.png'
import lupa from '../pages/image/lupa.png'
import Toti from "../components/ui/Toti";
import ask from '../components/ui/icons/preguntas.png'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${fondo});
  object-fit: cover;
  height: 100vh;
 background-size: 1080px 1920px;
 background-position: center;

`;

const Enlace = styled(Link)`
  text-decoration: none;
  z-index: 1;
`;
const  P = styled.p`
  font-size: 3rem;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

const C = styled.p`
 font-family: sans-serif;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Inicio = () => {

  return (
    <>
      <Container className="">
        <P className="p-inicio">¿En que te puedo ayudar?</P>
        <C className="sub-title">Selecciona una categoría:</C>
        <Div className="marco">
          <ul className="listaEnlace">
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono"  />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="encuentratuprofe">
                <img src={lupa} alt="icono" />
                Encuentra tu Profe
              </Enlace>
            </li>
            
          </ul>
        </Div>
        <Toti />

      </Container>
    </>

  );
};


export default Inicio;
