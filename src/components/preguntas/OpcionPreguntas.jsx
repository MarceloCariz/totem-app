import React, { useState } from "react";
import styled from "styled-components";
import Preguntas from "./Preguntas";

const Container = styled.div`
  margin-top: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0px 4px 0px 0px lightgray;

`;

const Categorias = styled.div`     
  /* background-color : ${(props) => props.activeCategory ? "#fff" : "red"};    */
  background-color: #fff;
  color: #012c56;
  font-weight: 700;
  border: 3px  blue;
  cursor: pointer;
  text-align: center;
  box-shadow: 1px 1px 1px 1px;
  border-radius: 20px;
  padding: 2rem;
  width: 25%;
  text-transform: capitalize;
`;
const ContainerCategoria = styled.div`
  background-color: #012c56;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 12rem;
  border-radius: 0px 0px 20px 20px;
  gap: 5%;
`;

const P = styled.div`
  cursor: pointer;
`;
const Opcion = styled.div`
  cursor: pointer;
  font-weight: 700;
  padding: 2rem;
  color: #012c56;
`;
const OpcionPreguntas = ({ categorias, subcategorias, preguntas }) => {
  const [activo, setActivo] = useState(false);
  const [activoCategoria, setActivoCategoria] = useState(false);
  const [styleCategory, setstyleCategory] = useState({estado: false, id: ''})
  const [data, setData] = useState([]);


  const handleClickCategoria = (datos) => {
    const {categoria: category, i} = datos;
    const data = preguntas.filter(({ categoria }) => categoria === category);
    setData(data);
    setActivoCategoria(true);
    setstyleCategory({estado:true, id: i})
    
    

  };

  const handleClick = () => {
    setActivo(!activo);
    setActivoCategoria(false);

  };



  return (
    <Container>
      <Opcion style={{'paddingLeft': 16}} onClick={handleClick} >Opcion 1 Preguntas Frecuentes </Opcion>
      {activo && (
        <>
          <ContainerCategoria >
            {categorias.length > 0 &&
              categorias.map((categoria, i) => (
                <Categorias style={styleCategory.estado && styleCategory.id !== i ? {opacity: 0.5 } : {opacity: 1} }
                  id={i}
                  key={i}
                  onClick={(e) => handleClickCategoria({categoria, i}, e)}
                >
                  <P>{categoria}</P>
                </Categorias>
              ))}
          </ContainerCategoria>

          {
            activoCategoria && data &&(
                <Preguntas data={data} />
            )
          }
        
        </>
      )}
    </Container>
  );
};

export default OpcionPreguntas;
