import React from 'react'
import './uiStyles.css'
import ojos from './icons/ojos.png'
import cuerpo from './icons/cuerpototi.png'

export const TotiClave = () => {
    return (<>
        <img className='cuerpoToti' src={cuerpo} alt="cuerpo"/>
        <img className='ojosToti' src={ojos} alt="ojos"/>
    </>
    )
}
export default TotiClave;
