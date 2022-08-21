import "./numericpad.css";

export const NumericPad = ({setRutAlumnos, rutAlumnos}) => {
    const onClickRut = (e) => {
        const value = e.currentTarget.value        
        setRutAlumnos(rutAlumnos + `${value}`);
    } 

    const onCleanRut = () => {setRutAlumnos("");}


  return (

    <div className="numeric-pad">

        <button onClick={onCleanRut} className="limpiar-pad">Limpiar</button>

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
    </div>
  );
};
