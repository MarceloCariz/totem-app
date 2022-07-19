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

    cargarImagenes()
  },[])
  return (
    <div className="App">
    <Carousel className='centrar-carrusel'showStatus={false} infiniteLoop={true} showIndicators={false}  showArrows={false} interval={8000} autoPlay={true} showThumbs={false}   >
        {imagenes &&
          imagenes.map((imagen)=>{
            return(
            <div key={imagen._id}>
            
              <Imagenes key={imagen._id} imagen={imagen}/>
            </div>
          )})
        }
    </Carousel>

    </div>
  );
}

export default App;
