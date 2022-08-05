import React, { useEffect, useState } from 'react';
import CardImagenes from '../components/Imagenes_carrusel/CardImagenes';
import { obtenerImagenes } from '../helpers/getImagenes'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Imagenes_carrusel/carrusel.css';

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
      <Carousel className='centrar-carrusel' autoPlay={true} emulateTouch={true} infiniteLoop={true} showIndicators={false} showArrows={false} interval={8000} showStatus={false} showThumbs={false}   >
        {imagenes &&
          imagenes.map((imagen) => {
            return (

              <CardImagenes key={imagen._id} imagen={imagen} />
            )
          })
        }        
      </Carousel>
    </>
  )
}

export default Imagenes