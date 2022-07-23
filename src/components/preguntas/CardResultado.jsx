import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;  
  width:70%;
  align-items: left;
  /* gap: 1rem; */
`;

const P = styled.div`
  text-align: center; 
  margin-top: 1rem;
  background-color: #6161fc; 
  padding: 4px 0px 4px 5px;
  width: auto;
`;



const R = styled.div`
  text-align: left;  
  background-color: #a7a7f8; 

`;


const CardResultado = ({resultado}) => {

    const {preguntas} = resultado;
  return (
    <>
    {
        preguntas ? preguntas.map(({pregunta, respuesta, _id})=>{
            return(
                <Container key={_id}>
                        <P>{pregunta}</P>
                        <R>{respuesta}</R>
            
                </Container>
            )
        }) : 'Consulta tu duda'
    }
    </>

  )
}

export default CardResultado