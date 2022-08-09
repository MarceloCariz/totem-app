import React from 'react'
import '../Imagenes_carrusel/carrusel.css';
import { Weather } from '../weather/Weather';

export const Head = () => {
    return (
        <div className='head'>
        <Weather/>
            <h1 className='titulo'>PUNTO DE INFORMACIÓN</h1>
            <div className='waves1'>
                <div className='wave1' id='wave11'></div>
                <div className='wave1' id='wave22'></div>
                <div className='wave1' id='wave33'></div>
                <div className='wave1' id='wave44'></div>
            </div>
        </div>
    )
}