import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import pa1 from '../../images/IMAGENES CARRUSEL/PA1.jpg'
import pa2 from '../../images/IMAGENES CARRUSEL/PA2.jpg'
import pa3 from '../../images/IMAGENES CARRUSEL/PA3.jpg'
import pa4 from '../../images/IMAGENES CARRUSEL/PA4.jpg'
import pa5 from '../../images/IMAGENES CARRUSEL/PA5.jpg'
import pa6 from '../../images/IMAGENES CARRUSEL/PA6.jpg'
import pa7 from '../../images/IMAGENES CARRUSEL/PA7.jpg'
import eb from '../../images/IMAGENES CARRUSEL/EquipoB.jpg'
import ec from '../../images/IMAGENES CARRUSEL/EquipoC.jpg'
import ede from '../../images/IMAGENES CARRUSEL/EquipoDE.jpg'
import sala from '../../images/IMAGENES CARRUSEL/DondeEstaMiSala.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Imagenes = () => {

  
  return (
    (<Carousel className='centrar-carrusel'showStatus={false} infiniteLoop={true} showIndicators={false}  showArrows={false} interval={8000} autoPlay={true} showThumbs={false}   >
        <img src={pa1} alt="" />
        <img src={pa2} alt="" />
        <img src={pa3} alt="" />
        <img src={pa4} alt="" />
        <img src={pa5} alt="" />
        <img src={pa6} alt="" />
        <img src={pa7} alt="" />
        <img src={eb} alt="" />
        <img src={ec} alt="" />
        <img src={ede} alt="" />
        <img src={sala} alt="" />
    </Carousel>)
  )
}

export default Imagenes