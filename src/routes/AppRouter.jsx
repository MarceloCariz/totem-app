import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categorias from '../components/opcion-preguntas/Categorias'
import PalabraClave from '../components/opcion-preguntas/PalabraClave'
import Preguntas from '../components/opcion-preguntas/Preguntas'
import Layout from '../layouts/Layout'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'

const AppRouter = () => {
  
  return (
    <Routes path='/' >
        <Route index element={<Imagenes/>} />
        <Route path='inicio' element={<Layout/>}>
           <Route index element={<Inicio/>} />
           <Route path='preguntas' element={<Preguntas/>}/>
           <Route path='preguntas/:categoria' element={<Categorias/>}/>
           <Route path='preguntas/:categoria/:subcategoria' element={<PalabraClave/>}/>


        </Route>
    </Routes>
    
  )
}

export default AppRouter