import React, { useState } from "react";
import styled from "styled-components";
import Preguntas from "./Preguntas";

const Container = styled.div`
  background-color: #8a8af8;
  display: flex;
  flex-direction: column;
  width: 70rem;
`;

const Categorias = styled.div`
  background-color: #7777af;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 12rem;
  gap: 12rem;
`;
const ContainerCategoria = styled.div`
  border: 3px solid blue;
  padding: 2rem;
  width: 25%;
  text-align: center;
`;

const P = styled.div`
  cursor: pointer;
`;
const OpcionPreguntas = ({ categorias, subcategorias, preguntas }) => {
  const [activo, setActivo] = useState(false);
  const [activoCategoria, setActivoCategoria] = useState(false);

  const [data, setData] = useState([]);


  const handleClickCategoria = (category) => {
    const data = preguntas.filter(({ categoria }) => categoria === category);

    setData(data);
    // data.map((i) =>{
    //     console.log(i)
    // })
    console.log("1");
    setActivoCategoria(true);

  };

  const handleClick = () => {
    setActivo(!activo);
    setActivoCategoria(false);

  };

  return (
    <Container>
      <p  onClick={handleClick} >Opcion 1 Preguntas Frecuentes </p>
      {activo && (
        <>
          <Categorias >
            {categorias &&
              categorias.map((categoria, i) => (
                <ContainerCategoria
                  key={i}
                  onClick={(e) => handleClickCategoria(categoria, e)}
                >
                  <P>{categoria}</P>
                </ContainerCategoria>
              ))}
          </Categorias>
          {
            activoCategoria && data &&(
                <Preguntas data={data} />
            )
          }
          {/* {data && } */}
        
        </>
      )}
    </Container>
  );
};

export default OpcionPreguntas;
