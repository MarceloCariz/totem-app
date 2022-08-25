import styled from "styled-components";
import { Link } from "react-router-dom";
import fondo from '../pages/image/FrenteAVaras.png'
import lupa from '../pages/image/lupa.png'
import tour from '../pages/image/TOURVIRTUAL.png'
import Toti from "../components/ui/Toti";
import ask from '../components/ui/icons/preguntas.png'
import { crearClick } from "../helpers/getClicks";
import { useEffect, useState } from "react";
import { TourVirtual } from "../components/tour-virtual/TourVirtual";
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

  const [tourQr, setTourQr] = useState(false);

  if (tourQr){
    setTimeout(() => {setTourQr(!tourQr);}, 60000)
  }

  const onClickTour = () => {


    setTourQr(!tourQr);
  }


  const vistaInicio = {
    idVista: 1,
    nombreVista: "VISTA INICIO"
  };

  
  useEffect(() => {
    crearClick(vistaInicio);
  }, []);

  return (
    <>
      <Container className="">
        <P className="p-inicio">¿En qué te puedo ayudar?</P>
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
                <Span>En proceso</Span>
              </Enlace>
            </li>
            <li>
              <div className="enlaces" onClick={onClickTour}>
                <img src={tour} alt="icono" />
                Tour Virtual
                <Span>En proceso</Span>
              </div>
            </li>
            
          </ul>




        </Div>
        <Toti />


      {
          (tourQr) ? <TourVirtual /> : null
        }

      </Container>
    </>

  );
};

const Span = styled.span`
  color: black;
  font-size: 1rem;
  position: absolute;
  margin-top: 11.3rem;
  text-transform: uppercase;
`;
export default Inicio;
