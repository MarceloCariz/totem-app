import styled from "styled-components";
import './styles-key.css'
import volver from './icons/volver.png';
import flechaBuscar from './icons/flechaBuscar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Keyboard = ({ nameDocente, setNameDocente, activeKeyboard, submit }) => {

    const onClickName = (e) => {
        const value = e.currentTarget.value
        setNameDocente(nameDocente + `${value}`);
    }
    const onCleanName = () => { setNameDocente(""); }


    return (
        <>
            <Div>
                <Volver onClick={activeKeyboard} >
                    <img src={volver} alt="" />
                </Volver>
                <button onClick={onCleanName} className="limpiar-pad">
                    <FontAwesomeIcon icon={faTrash} />
                    Limpiar
                </button>
                <Buscar onClick={submit}>
                    Buscar
                    <img src={flechaBuscar} alt="" />
                </Buscar>
            </Div>
            <div className='teclado'>
                <div className="primera-linea">
                    <button value="Q" onClick={onClickName} className="tecla">Q</button>
                    <button value="W" onClick={onClickName} className="tecla">W</button>
                    <button value="E" onClick={onClickName} className="tecla">E</button>
                    <button value="R" onClick={onClickName} className="tecla">R</button>
                    <button value="T" onClick={onClickName} className="tecla">T</button>
                    <button value="Y" onClick={onClickName} className="tecla">Y</button>
                    <button value="U" onClick={onClickName} className="tecla">U</button>
                    <button value="I" onClick={onClickName} className="tecla">I</button>
                    <button value="O" onClick={onClickName} className="tecla">O</button>
                    <button value="P" onClick={onClickName} className="tecla">P</button>

                </div>
                <div className="segunda-linea">
                    <button value="A" onClick={onClickName} className="tecla">A</button>
                    <button value="S" onClick={onClickName} className="tecla">S</button>
                    <button value="D" onClick={onClickName} className="tecla">D</button>
                    <button value="F" onClick={onClickName} className="tecla">F</button>
                    <button value="G" onClick={onClickName} className="tecla">G</button>
                    <button value="H" onClick={onClickName} className="tecla">H</button>
                    <button value="J" onClick={onClickName} className="tecla">J</button>
                    <button value="K" onClick={onClickName} className="tecla">K</button>
                    <button value="L" onClick={onClickName} className="tecla">L</button>
                </div>
                <div className="tercera-liena">
                    <button value="Ñ" onClick={onClickName} className="tecla">Ñ</button>
                    <button value="Z" onClick={onClickName} className="tecla">Z</button>
                    <button value="X" onClick={onClickName} className="tecla">X</button>
                    <button value="C" onClick={onClickName} className="tecla">C</button>
                    <button value="V" onClick={onClickName} className="tecla">V</button>
                    <button value="B" onClick={onClickName} className="tecla">B</button>
                    <button value="N" onClick={onClickName} className="tecla">N</button>
                    <button value="M" onClick={onClickName} className="tecla">M</button>
                </div>
                <div className="barra-espacio">
                    <button value=" " onClick={onClickName} className="tecla espacio">ESPACIO</button>
                </div>
            </div>
        </>
    )
}

const Div = styled.div`
  display: flex;
  justify-content:space-between;
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
