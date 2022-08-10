import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { useNavigate } from "react-router-dom";
import { enviarEvaluacion } from "../../helpers/getPreguntas";
import './preguntas.css';
import { BiSmile } from "react-icons/bi";
import { RiEmotionUnhappyLine } from "react-icons/ri";
const EvaluacionForm = () => {
  const { preguntaSeleccionada } = useOpciones();
  const navigate = useNavigate();
  
  const [evaluacion, setEvaluacion] = useState({
    pregunta: "",
    respuesta: "",
    correo: "",
  });
  const [active, setActive] = useState(false);

  console.log(preguntaSeleccionada)

  
  const { correo } = evaluacion;

  const handleInputChange = (e) => {
    setEvaluacion({ ...evaluacion, correo: e.target.value });
  };

  const handleClick = ({ target }) => {
    if (target.value === "NO") {
      setEvaluacion({
        pregunta: preguntaSeleccionada.pregunta,
        respuesta: target.value,
      });
      setActive(true);
      return;
    }
    setEvaluacion({ pregunta: preguntaSeleccionada.pregunta, respuesta: target.value });
    setActive(false);
  };

  const handleEnviar = async (e) => {
    e.preventDefault();
    await enviarEvaluacion({ ...evaluacion, categoria: 'pregunta' })
    navigate("/inicio");
  };
  return (
    <>
      {/* <div className='rectangulo' /> */}
      <form className="form-eva" action="" onSubmit={handleEnviar}>
        <p className="p-exp">Considerando la experiencia previa</p>
        <p className="p-lograste">¿Lograste obtener una respuesta?</p>

        <div className="div-eva">
          <input className="input-si" onClick={(e) => handleClick(e)} value="SI" readOnly />
          <BiSmile className="icon-1" />
          <input className="input-no" onClick={(e) => handleClick(e)} value="NO" readOnly />
          <RiEmotionUnhappyLine className="icon-2" />
        </div>
        {active && (
          <>
            <p className="p-finalizar">Ingresa tu correo para finalizar</p>
            <input
              className="inp-correo"
              type="text"
              name=""
              id=""
              onChange={handleInputChange}
              value={correo || ""}
              placeholder=""
            />
          </>
        )}

        <button className="btn-enviar" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default EvaluacionForm;
