import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../../App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from "./Carrousel/Carrousel"
import JuegosPopulares from './JuegosPopulares.jsx'
import Novedades from './Novedades.jsx'

const Home = () => {

  return (
    <>
    <div className="container">
      <Carrousel></Carrousel>
    </div>
    <div className="container">
      <Novedades></Novedades>
    </div>
    <div>
      <JuegosPopulares className=""></JuegosPopulares>
    </div>
    </>
  );
}
export default Home;
