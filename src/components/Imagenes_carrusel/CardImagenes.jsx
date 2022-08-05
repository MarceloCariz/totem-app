import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import wsp from './img/whatsapp.png';
import fb from './img/facebook.png';
import ig from './img/instagram.png';


const Button = styled(Link)`
`;


const CardImagenes = ({ imagen }) => {

  const { path } = imagen;
  return (<>
    <div className='div-carrusel'>
      <h1 className='titulo'>PUNTO DE INFORMACIÓN</h1>
      <div className='img-carrusel'>
        <img src={path} alt="" />
      </div>
      <div className='borde-div'>
        <Button className='btn-inicio' to='inicio' >COMENZAR</Button>
      </div>
      <div className='radio-div'></div>
    </div>
    <footer>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>
      <ul className='social-icon'>
        <li><BsWhatsapp className='icon-wsp' />
          <img src={wsp}/>   
          </li>
        <li><BsInstagram className='icon-ig' />
          <img src={ig}/>   
          </li>
        <li><BsFacebook className='icon-fb' />
          <img src={fb} />   
           </li>
      </ul>
    </footer>
  </>
  )
}

export default CardImagenes