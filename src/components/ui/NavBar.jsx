import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import home from './icons/Home.png'
import prev_activo from './icons/prev-activo.png'
import prev from './icons/prev.png'



const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  
  return (
    <Div>
      {
        location.pathname === '/inicio'  ?
        (<img  src={prev} alt="prev" />) :
      (<img onClick={()=> navigate(-1)} src={prev_activo} alt="prev"/>)
      }
      <Home onClick={()=> navigate('/inicio')} src={home} alt="home" />
      
    </Div>
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
`;

export default NavBar