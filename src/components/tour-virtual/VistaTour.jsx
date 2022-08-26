import fondo from './img/fondo.png'
import qrNuevo from './img/qr-nuevo.png'
import totiTour from './img/toti-tour.png'
import styled from 'styled-components';
import "./tourvirtual.css";

export const VistaTour = () => {
    return (
        <Div>
        <img className='toti' src={totiTour}/>
            <div className='imagenes'>
                <h1 className='titulo-vista'>Escanea el siguiente código</h1>
                <img className='fondo' src={fondo} />
                <img className='qr' src={qrNuevo} />
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
