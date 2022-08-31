import styled from "styled-components";

import "./tourvirtual.css";
import totitour2 from "./img/toti-tour2.png";
import fondocodigo from "./img/IMAGEN_FONDO_1.png";
import logoTour from "./img/logo-tour.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const TourVirtual = () => {
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 30000);
  }, []);
  return (
    <>
      <Div>
        <img className="fondocodigo" src={fondocodigo} />
        <img className="logo-tour" src={logoTour} />
        <img className="totitour2" src={totitour2} />
        <div className="div-title">
          <div className="div-titulo">
          <div className="div-titulo dos"/>
          <div className="fondo-blur" />
            <h1 className="titulo-tour">VIVE UNA NUEVA EXPERIENCIA</h1>
          </div>
          <div className="fondo-blur posicion" />
          <h1 className="recorre">Anímate y recorre la sede </h1>
          <h1 className="recorre virtual">virtualmente</h1>

        </div>
        <Link to=":vistatour">
          <button className="btn-get">OBTENER CÓDIGO</button>
        </Link>
      </Div>
    </>
  );
};

const Div = styled.div`
  background-color: #000000;
  object-fit: cover;
  height: 100vh;
  margin-top: -11rem;
  background-size: 1080px 1920px;
  background-position: center;
`;
