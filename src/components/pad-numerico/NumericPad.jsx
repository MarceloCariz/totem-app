import styled from "styled-components";
import "./numericpad.css";
import flechaBuscar from './icons/flechaBuscar.png';
import volver from './icons/volver.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const NumericPad = ({ setRutAlumnos, rutAlumnos, activeNumpad, submit }) => {
  const onClickRut = (e) => {
    const value = e.currentTarget.value
    setRutAlumnos(rutAlumnos + `${value}`);
  }

  const onCleanRut = () => { setRutAlumnos(""); }


  return (
<>
<Div>
<Volver onClick={activeNumpad} >
  {/* Volver */}
  <img src={volver} alt="" />
</Volver>
<button onClick={onCleanRut} className="limpiar-pad">
  <FontAwesomeIcon icon={faTrash}/>
  Limpiar
  </button>
<Buscar onClick={submit}>
Buscar
<img src={flechaBuscar} alt="" />

</Buscar>
</Div>



    <div className="numeric-pad">


      <button value="1" onClick={onClickRut} className="numeric-pad-button">1</button>
      <button value="2" onClick={onClickRut} className="numeric-pad-button">2</button>

      <button value="3" onClick={onClickRut} className="numeric-pad-button">3</button>
      <button value="4" onClick={onClickRut} className="numeric-pad-button">4</button>
      <button value="5" onClick={onClickRut} className="numeric-pad-button">5</button>
      <button value="6" onClick={onClickRut} className="numeric-pad-button">6</button>
      <button value="7" onClick={onClickRut} className="numeric-pad-button">7</button>
      <button value="8" onClick={onClickRut} className="numeric-pad-button">8</button>
      <button value="9" onClick={onClickRut} className="numeric-pad-button">9</button>
      <button value="0" onClick={onClickRut} className="numeric-pad-button">0</button>
      <button value="K" onClick={onClickRut} className="numeric-pad-button">K</button>
    </div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content:space-between;
  /* gap: 15rem; */
  width: 93%;
  margin-bottom: 1rem;

` 

const Buscar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: rgb(145,145,144, 0.7);
  font-family: sans-serif;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 2rem;
  width: 251px;
  height: 75px;
  border: 2px solid rgba(255, 255, 255, 0.59);
  border-radius: 0px 22px 22px 0px;
  background-color: transparent;
`;

const Volver = styled.button`
  background-color: transparent;
  border: none;
`;