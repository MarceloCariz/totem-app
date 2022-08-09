import React from 'react'
import styled from 'styled-components';
import logo from '../icons/logo-preguntas.png'

export const Logo = () => {
  return (
    <Div>
        <img src={logo} alt="" />

</Div>
  )
}
const Div = styled.div`
  /* margin-bottom: 90rem; */
  top:10px;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  /* margin: 0  auto; */
  position:absolute;
`;