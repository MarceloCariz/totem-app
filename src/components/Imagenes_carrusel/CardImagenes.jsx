import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Button = styled(Link)`
`;


const CardImagenes = ({ imagen }) => {

  const { path } = imagen;
  return (<>
 
      <div className='img-carrusel'>
        <img src={path} alt="" />
      </div>
  
  </>
  )
}

export default CardImagenes