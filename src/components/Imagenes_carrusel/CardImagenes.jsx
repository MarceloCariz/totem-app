import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOpciones from '../../hooks/useOpciones';


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
  const {setStandBY, standBy} = useOpciones();
  const navigate = useNavigate();

  console.log(standBy)
  const handleClick = () =>{
    // setStandBY(false)
    setTimeout(() => {
      navigate('/')
    }, 60000);
  }
  return (
    <>
    
    
    <Container>
        <img src={path} alt="" />
    
    </Container>
        <Button onClick={handleClick} to='inicio'>¡Bienvenido!</Button>
   
        </>
    
    
  )
}

export default CardImagenes