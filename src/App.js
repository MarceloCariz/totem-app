import React, { useEffect, useState } from 'react';
import Imagenes from './components/Imagenes_carrusel/Imagenes';
import {obtenerImagenes} from '../src/helpers/getImagenes'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function App() {

  const [imagenes, setimagenes] = useState([])
  useEffect(()=>{

    const cargarImagenes = async()=>{
      const resultado = await obtenerImagenes()
      setimagenes(resultado)
    }
    cargarImagenes();

    const interval = setInterval(()=>{
      cargarImagenes();
      console.log('Carge')
    },60000);

    return ()=>clearInterval(interval);
  },[])
  return (
    <div className="App">
    <Carousel className='centrar-carrusel' autoPlay={true}  infiniteLoop={true} showIndicators={false}  showArrows={false} interval={8000}showStatus={false} showThumbs={false}   >
        {imagenes &&
          imagenes.map((imagen)=>{
            return(
            
              <Imagenes key={imagen._id} imagen={imagen}/>
          )})
        }
    </Carousel>

    </div>
  );
}

export default App;
