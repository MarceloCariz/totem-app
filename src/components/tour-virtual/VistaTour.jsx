import fondo from './img/fondo.png'
import qrNuevo from './img/qr-nuevo.png'
import totiTour from './img/toti-tour.png'
import styled from 'styled-components';
import "./tourvirtual.css";
import { useNavigate } from 'react-router-dom';

export const VistaTour = () => {
    const navigate = useNavigate();
    const handleAddCategory = () =>{
        navigate('/inicio/evaluacion')
    }
    return (
        <Div>
        <img className='toti' src={totiTour}/>
            <div className='imagenes'>
                <h1 className='titulo-vista'>Escanea el siguiente código</h1>
                <img className='fondo' src={fondo} />
                <img className='qr' src={qrNuevo} />
                <Boton onClick={handleAddCategory} >Continuar</Boton>
            </div>
        </Div>
    )
}

const Div = styled.div`
background-color: #000000;
object-fit: cover;
height: 100vh;
margin-top: -11rem;
background-size: 1080px 1920px;
background-position: center;
`;
const Boton = styled.button`
${'' /* margin-top: -20px; */}
position: absolute;
top: 1100px;
left: 37%;
  background-color: #FFB71B;
  padding: 1rem 5rem 1rem 5rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 34px;
  text-decoration: none;
  font-weight: 700;
`;
