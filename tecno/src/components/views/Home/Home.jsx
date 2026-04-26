import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from './Carrousel/Carrousel.jsx'
import JuegosPopulares from './JuegosPopulares.jsx'

const Home = () => {

  }

  return (
    <>
    <div className="container">
      <Carrousel></Carrousel>
    </div>
    </>
  );

export default Home;
