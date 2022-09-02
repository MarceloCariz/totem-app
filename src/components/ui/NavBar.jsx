import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import home from './icons/Home.png'

import prev_activo from './icons/prev-activo.png'
import prev from './icons/prev.png'



const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {categoria, subcategoria} = useParams();
  // console.log(location.pathname.normalize('NFD').replace(/[\u0300-\u036f]/g,""))
  const ruta = (`/inicio/preguntas/${categoria}/${subcategoria}`).replace(/\s+/g, '%20')
  // console.log(ruta)
  
  return (
    <>
    {/* {location.pathname === ruta ? '' :( */}

       <Div>
      {
        location.pathname === '/inicio' 
        || location.pathname ==='/inicio/evaluacion' 
        || location.pathname ==='/inicio/encuentratuprofe/resultado/salas' 
        || location.pathname ==='/inicio/tour/:vistatour'  ?
        (<img  src={prev} alt="prev" />) :
      (<img onClick={()=> navigate(-1)} src={prev_activo} alt="prev"/>)
      }
      <Home  active={location.pathname} onClick={()=> navigate(location.pathname === '/inicio'  ? '/' : '/inicio' )} src={home} alt="home" />
      
    </Div>
    {/* )} */}

    </>
 
  )
}

const Div = styled.div`
  display: flex;
  padding-top: 2rem;
  align-items: center;
  position: absolute;
  justify-content: center;
  gap: 2rem;
  bottom: 370px;
  right: 50%;
  left: 40%;
  margin: 0 auto;
`;

const Home = styled.img`
  border-radius: 0px;
  opacity: ${props => props.active=== '/inicio/evaluacion' 
  || props.active=== '/inicio/encuentratuprofe/resultado/salas' 
  || props.active=== '/inicio/tour/:vistatour' ? '50%' : '100%'} ;
  pointer-events:  ${props => props.active=== '/inicio/evaluacion' 
  || props.active=== '/inicio/encuentratuprofe/resultado/salas' 
  || props.active=== '/inicio/tour/:vistatour' ? 'none' : ''};
`;

export default NavBar