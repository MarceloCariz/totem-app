import React, {  useRef, useState } from "react";
import styled from "styled-components";

const P = styled.p`
  /* display:none; */
  width: auto;
  /* padding: 12px 0px 12px 12px; */
  padding-left: 12px;
`;

const Titulo = styled.p`
  /* display:none; */
  width: auto;
  /* padding: 12px 0px 12px 12px; */
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
`;
const PR = styled.p`
  width: auto;
  background-color: #012c56;
  color: white;
  padding: 12px 0px 12px 12px;
  border-radius: 20px;

  /* padding: 1rem 2rem; */
`;
const Div = styled.div`
  width: auto;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 20rem;
  padding: 12px 8px 12px 8px;
`;
const Preguntas = ({ data }) => {
  const [activo, setActivo] = useState(false);
  const [respuestaF, setRespuestaF] = useState({ id: "", pregunta: "" });
  const isActive = useRef();

  const handleClick = (e) => {
    setActivo(true)
    // if (isActive.current.id !== respuestaF.id && activo === false) {
    //     setActivo(true)
    //   }
    setRespuestaF({ id: e._id });
  };

  return (
    <Div>
      <Titulo>{data[0].categoria}</Titulo>
      {data.map(({ _id, pregunta, respuesta }) => (
        <div
          ref={isActive}
          id={_id}
          onClick={(e) => handleClick({ _id, respuesta }, e)}
          key={_id}
        >
          <PR> {pregunta}</PR>
          {activo && <P>{respuestaF.id === _id ? respuesta : ""}</P>}
        </div>
      ))}
    </Div>
  );
};

export default Preguntas;
