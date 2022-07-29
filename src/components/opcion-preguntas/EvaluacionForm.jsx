import React, { useState } from "react";
import useOpciones from "../../hooks/useOpciones";
import { useNavigate } from "react-router-dom";
import { enviarEvaluacion } from "../../helpers/getPreguntas";
const EvaluacionForm = () => {
  const { preguntaSeleccionada } = useOpciones();
  const navigate = useNavigate();

  const [evaluacion, setEvaluacion] = useState({
    pregunta: "",
    respuesta: "",
    correo: "",
  });
  const [active, setActive] = useState(false);



  
  const { correo } = evaluacion;

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

  const handleEnviar = async(e) => {
    e.preventDefault();
    await enviarEvaluacion({...evaluacion, categoria: 'pregunta'})
    console.log(evaluacion)

    navigate("/inicio");
  };
  return (
    <>
      <form action="" onSubmit={handleEnviar}>
        <p>Considerando la experiencia previa</p>
        <p>Lograste obtener una respuesta</p>

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
