import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled(Link)`
  width: 30%;
  padding: 6px 8px 6px 8px;
  background-color: #ffb71b;
  color: white;
  text-decoration: none;
  border-radius: 10px;
`;

const Container =styled.div`
  display: flex;
  flex-direction:column;
  gap: 1rem;
  align-items: center;
`;

const CardImagenes = ({imagen}) => {

  const {path} = imagen;


  return (
    <Container>
        <img src={path} alt="" />
        <Button to='inicio'>¡Bienvenido!</Button>
    
    </Container>
   
    
    
  )
}

export default CardImagenes