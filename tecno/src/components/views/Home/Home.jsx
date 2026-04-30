import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../../App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from "./Carrousel/Carrousel"
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx'
import Novedades from './estructuraHome/Novedades.jsx'

const Home = () => {

<<<<<<< HEAD
=======
//este componente no necesita muchos cambios debido a que todo el contenido esta dentro de los componentes importados
>>>>>>> d9daae080cd0b80e9cdf2ab67ec43ab7b4f71425
  return (
    <>
    <div className="container">
      <Carrousel></Carrousel>
    </div>
    <div className="container-fluid">
      <Novedades></Novedades>
    </div>
<<<<<<< HEAD
    <div>
      <JuegosPopulares className=""></JuegosPopulares>
=======
    <div className="container-fluid">
      <JuegosPopulares></JuegosPopulares>
>>>>>>> d9daae080cd0b80e9cdf2ab67ec43ab7b4f71425
    </div>
    </>
  );
}
export default Home;
