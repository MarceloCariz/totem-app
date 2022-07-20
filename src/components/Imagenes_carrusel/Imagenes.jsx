import React, { useEffect } from 'react'


const Imagenes = ({imagen}) => {

  const {path, title} = imagen;
  return (
    <>
        <img src={path} alt="" />
    
    </>
   
    
    
  )
}

export default Imagenes