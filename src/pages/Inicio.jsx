import styled from "styled-components";
import { Link } from "react-router-dom";
import fondo from './image/FrenteAVaras.png'
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
const Inicio = () => {

  return (
    <>
      <Container className="">
        <p className="p-inicio">En que te puedo ayudar</p>
        <p className="sub-title">Seleciona una categoría:</p>
        <div className="marco">
          <ul className="listaEnlace">
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono"  />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
            <li>
              <Enlace className="enlaces" to="preguntas">
                <img src={ask} alt="icono" />
                Preguntas Frecuentes
              </Enlace>
            </li>
          </ul>
        </div>
        <Toti />

      </Container>
    </>

  );
};


export default Inicio;
