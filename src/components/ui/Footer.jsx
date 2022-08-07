import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import wsp from '../Imagenes_carrusel/img/whatsapp.png';
import fb from '../Imagenes_carrusel/img/facebook.png';
import ig from '../Imagenes_carrusel/img/instagram.png';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
    <div className='waves'>
      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>
      <div className='wave' id='wave3'></div>
      <div className='wave' id='wave4'></div>
    </div>
    <ul className='social-icon'>
      <li><BsWhatsapp className='icon-wsp' />
        <img src={wsp} alt='wsp'/>   
        </li>
      <li><BsInstagram className='icon-ig'  />
        <img src={ig} alt='ig'/>   
        </li>
      <li><BsFacebook className='icon-fb' />
        <img src={fb} alt='fb' />   
         </li>
    </ul>
  </FooterContainer>
  )
}

const  FooterContainer = styled.footer`
  /* margin-top: 18.5rem; */
  bottom: 0;
  position: fixed;
`;
