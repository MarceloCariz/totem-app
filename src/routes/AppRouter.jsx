import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Categorias from '../components/opcion-preguntas/Categorias'
import EvaluacionForm from '../components/opcion-preguntas/EvaluacionForm'
import PalabraClave from '../components/opcion-preguntas/PalabraClave'
import Preguntas from '../components/opcion-preguntas/Preguntas'
import Layout from '../layouts/Layout'
import Imagenes from '../pages/Imagenes'
import Inicio from '../pages/Inicio'
import { IdleTimerProvider } from "react-idle-timer";

const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const onIdle = () => {
    if(location.pathname === '/'){
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
    <IdleTimerProvider timeout={1500000}  onIdle={onIdle} onActive={onActive}>

    <Routes path='/' >
        <Route index element={<Imagenes/>} />
        <Route path='inicio' element={<Layout/>}>
           <Route index element={<Inicio/>} />
           <Route path='preguntas' element={<Preguntas/>}/>
           <Route path='preguntas/:categoria' element={<Categorias/>}/>
           <Route path='preguntas/:categoria/:subcategoria' element={<PalabraClave/>}/>
           <Route path='evaluacion' element={<EvaluacionForm/>}/>


        </Route>

    </Routes>
    </IdleTimerProvider>
    
  )
}

export default AppRouter