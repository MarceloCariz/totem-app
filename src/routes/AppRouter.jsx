import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Categorias from '../components/opcion-preguntas/Categorias'
import EvaluacionForm from '../components/opcion-preguntas/EvaluacionForm'
import PalabraClave from '../components/opcion-preguntas/PalabraClave'
import Preguntas from '../components/opcion-preguntas/Preguntas'
import Layout from '../layouts/Layout'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'
import { Encuentra } from '../components/busca-tu-profe/Encuentra'
import { IdleTimerProvider } from "react-idle-timer";
import { Pregunta } from '../components/opcion-preguntas/prueba/Pregunta'
import { Weather } from '../components/weather/Weather'
import { BuscarRut } from '../components/busca-tu-profe/BuscarRut'
import Salas from '../components/busca-tu-profe/Salas'
import { TourVirtual } from '../components/tour-virtual/TourVirtual'
import { VistaTour } from '../components/tour-virtual/VistaTour'


const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const onIdle = () => {
    if (location.pathname === '/') {
      console.log('principal')
      return
    }
    navigate('/')
  };

  const onActive = (event) => {
    // Close Modal Prompt
    // Do some active action
    console.log('activo')
  };
  return (
    <IdleTimerProvider timeout={100000 * 20} onIdle={onIdle} onActive={onActive}>
      <Weather />
      <Routes path='/' >
        <Route index element={<Imagenes />} />
        <Route path='inicio' element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='preguntas' element={<Preguntas />} />
          <Route path='preguntas/:categoria' element={<Categorias />} />
          <Route path='preguntas/:categoria/:subcategoria' element={<PalabraClave />} />
          <Route path='pregunta' element={<Pregunta />} />
          <Route path='evaluacion' element={<EvaluacionForm />} />
          <Route path='encuentratuprofe' element={<Encuentra />} />
          <Route path='encuentratuprofe/:buscarporrut' element={<BuscarRut />} />
          <Route path='encuentratuprofe/:buscarporrut/salas' element={<Salas />} />
          <Route path='tour' element={<TourVirtual />} />
          <Route path='tour/:vistatour' element={<VistaTour />} />

        </Route>
      </Routes>
    </IdleTimerProvider>
  )
}

export default AppRouter