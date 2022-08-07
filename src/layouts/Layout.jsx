import React from 'react'
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components/ui/Footer';
import NavBar from '../components/ui/NavBar';

const Main = styled.main`
  background-color: #1E1E1E;  
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <div>
        <Main className='example'>
            <Outlet/>
            <NavBar/>
            <Footer/>
        </Main>
    </div>
  )
}

export default Layout
