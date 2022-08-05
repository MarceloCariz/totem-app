import React, { useEffect, useState } from 'react';
import CardImagenes from '../components/Imagenes_carrusel/CardImagenes';
import { obtenerImagenes } from '../helpers/getImagenes'
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Imagenes_carrusel/carrusel.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import wsp from '../components/Imagenes_carrusel/img/whatsapp.png';
import fb from '../components/Imagenes_carrusel/img/facebook.png';
import ig from '../components/Imagenes_carrusel/img/instagram.png';


const Button = styled(Link)`
`;



const Imagenes = () => {

  const [imagenes, setimagenes] = useState([])
  useEffect(() => {

    const cargarImagenes = async () => {
      const resultado = await obtenerImagenes()
      setimagenes(resultado)
    }
    cargarImagenes();

    const interval = setInterval(() => {
      cargarImagenes();
    }, 60000);

    return () => clearInterval(interval);
  }, [])
  return (
    <>
    <div className='div-carrusel'>
      <h1 className='titulo'>PUNTO DE INFORMACIÓN</h1>
      <div className='centrar-carrusel'>
      <Carousel className={'width-carrusel'} autoPlay={true} emulateTouch={true} infiniteLoop={true} showIndicators={true} showArrows={false} interval={8000} showStatus={false} showThumbs={false}   >
        {imagenes &&
          imagenes.map((imagen) => {
            return (

              <CardImagenes key={imagen._id} imagen={imagen} />
            )
          })
        }        
      </Carousel>
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

export default Imagenes