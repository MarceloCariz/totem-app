import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import home from './icons/Home.png'
import homeDisabled from './icons/homeDisabled.png'

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
        location.pathname === '/inicio' || location.pathname ==='/inicio/evaluacion'  ?
        (<img  src={prev} alt="prev" />) :
      (<img onClick={()=> navigate(-1)} src={prev_activo} alt="prev"/>)
      }
      <Home  active={location.pathname} onClick={()=> navigate(location.pathname === '/inicio' ? '/' : '/inicio')} src={home} alt="home" />
      
    </Div>
    {/* )} */}

    </>
 
  )
}

const Div = styled.div`
  display: flex;
  /* width: 30%; */
  /* margin-top: 300rem; */
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
  /* object-fit: contain; */
  border-radius: 0px;
  opacity: ${props => props.active=== '/inicio/evaluacion' ? '50%' : '100%'} ;
  pointer-events:  ${props => props.active=== '/inicio/evaluacion' ? 'none' : ''};
`;

export default NavBar