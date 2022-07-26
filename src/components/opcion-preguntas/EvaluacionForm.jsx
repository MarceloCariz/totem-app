import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { Link, useNavigate } from "react-router-dom";
const EvaluacionForm = () => {
  const { preguntaSeleccionada } = useOpciones();
  const [evaluacion, setEvaluacion] = useState({
    pregunta: "",
    respuesta: "",
    correo: "",
  });
  const [active, setActive] = useState(false);
  const { correo } = evaluacion;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEvaluacion({ ...evaluacion, correo: e.target.value });
  };

  const handleClick = ({ target }) => {
    if (target.value === "no") {
      setEvaluacion({
        pregunta: preguntaSeleccionada,
        respuesta: target.value,
      });
      setActive(true);
      return;
    }
    setEvaluacion({ pregunta: preguntaSeleccionada, respuesta: target.value });
    setActive(false);
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    console.log(evaluacion);
    navigate("/inicio");
  };
  return (
    <>
      <form action="" onSubmit={handleEnviar}>
        <p>Considerando la experiencia previa</p>
        <p>Lograste obtener una respuesta</p>

        {/* <p onClick={} >NO</p> */}
        <input onClick={(e) => handleClick(e)} value="si" readOnly/>
         
        

        <input onClick={(e) => handleClick(e)} value="no" readOnly/>
       
        {active && (
          <>
            <p>Ingresa tu correo para finalizar</p>
            <input
              type="text"
              name=""
              id=""
              onChange={handleInputChange}
              value={correo || ""}
              placeholder=""
            />
          </>
        )}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default EvaluacionForm;
