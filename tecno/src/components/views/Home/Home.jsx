import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Carrousel from "./Carrousel/Carrousel";
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx';
import Novedades from './estructuraHome/Novedades.jsx';
import FiltroCategorias from "../FiltroCategorias";

const Home = () => {

  // 🎯 estado del filtro
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  return (
    <>
      {/* 🎮 CARROUSEL */}
      <section className="section">
        <div className="container">
          <Carrousel />
        </div>
      </section>

      {/* 🆕 NOVEDADES */}
      <section className="section">
        <h2 className="section-title">Novedades</h2>
        <div className="container">
          <div className="section-content">
            <Novedades />
          </div>
        </div>
      </section>

      {/* 🎯 FILTRO */}
      <section className="section">
        <h2 className="section-title">Categorías</h2>
        <div className="container">
          <FiltroCategorias setCategoriaSeleccionada={setCategoriaSeleccionada} />
        </div>
      </section>

      {/* 🔥 JUEGOS POPULARES */}
      <section className="section">
        <h2 className="section-title">Juegos Populares</h2>
        <div className="container">
          <div className="section-content">
            <JuegosPopulares categoriaSeleccionada={categoriaSeleccionada} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;