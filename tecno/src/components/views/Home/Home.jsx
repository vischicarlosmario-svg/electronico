import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../../App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from "./Carrousel/Carrousel"
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx'
import Novedades from './estructuraHome/Novedades.jsx'

const Home = () => {

//este componente no necesita muchos cambios debido a que todo el contenido esta dentro de los componentes importados
  return (
    <>
    <div className="container">
      <Carrousel></Carrousel>
    </div>
    <div className="container-fluid">
      <Novedades></Novedades>
    </div>
    <div className="container-fluid">
      <JuegosPopulares></JuegosPopulares>
    </div>
    </>
  );
}
export default Home;
