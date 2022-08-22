import styled from "styled-components";
import "./numericpad.css";

export const NumericPad = ({ setRutAlumnos, rutAlumnos, activeNumpad, submit }) => {
  const onClickRut = (e) => {
    const value = e.currentTarget.value
    setRutAlumnos(rutAlumnos + `${value}`);
  }

  const onCleanRut = () => { setRutAlumnos(""); }


  return (
<>
<Div>
<Button onClick={activeNumpad} className="limpiar-pad">Cerrar</Button>
<Button onClick={onCleanRut} className="limpiar-pad">Limpiar</Button>
<Button onClick={submit} className="limpiar-pad">Buscar</Button>
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
  justify-content: space-between;
  gap: 15rem;
` 

const Button = styled.button`
  
`;