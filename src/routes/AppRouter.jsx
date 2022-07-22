import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Imagenes from '../pages/Imagenes'
import Preguntas from '../pages/Preguntas'

const AppRouter = () => {
  return (
    <Routes path='/'>
        <Route index element={<Imagenes/>} />
        <Route path='preguntas' element={<Preguntas/>} />

    </Routes>
  )
}

export default AppRouter