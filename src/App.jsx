import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavHead from './componente/NavHead';
import Inicio from './componente/Inicio';
import Proyectos from './componente/Proyectos';

import Footer from "./componente/Footer.jsx";
import Contacto from "./componente/Contacto.jsx";




function App() {
  

  return (
    <>
      <NavHead />
        <Inicio />
        <Contacto />
        <Proyectos />

        <Footer />
    </>
  )
}

export default App
