import React from 'react'
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #1E1E1E;  
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
