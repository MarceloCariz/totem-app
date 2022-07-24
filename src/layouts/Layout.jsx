import React from 'react'
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #e6e6e6;  
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <div>
        <Main>
            <Outlet/>

        </Main>
    </div>
  )
}

export default Layout