import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'

const AppRouter = () => {
  return (
    <Routes path='/' >
        <Route index element={<Imagenes/>} />
        <Route path='inicio' element={<Layout/>}>
           <Route index element={<Inicio/>} />
        </Route>
    </Routes>
    
  )
}

export default AppRouter