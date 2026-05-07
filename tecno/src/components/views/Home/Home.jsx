import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Carrousel from "./Carrousel/Carrousel";
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx';
import Novedades from './estructuraHome/Novedades.jsx';
import FiltroCategorias from "../FiltroCategorias";

const Home = () => {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  return (
    <>
      <section className="section">
        <div className="container">
          <Carrousel />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Novedades</h2>
        <div className="container">
          <div className="section-content">
            <Novedades />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Juegos Populares</h2>

        {/* 🔥 FILTRO */}
        <FiltroCategorias setCategoriaSeleccionada={setCategoriaSeleccionada} />

        <div className="container">
          <div className="section-content">
<<<<<<< HEAD
            <JuegosPopulares 
              allProducto={allProducto}
              setAllProducto={setAllProducto}
              Total={Total}
              setTotal={setTotal}
              contadorProducto={contadorProducto}
              setContadorProducto={setContadorProducto}
            />
=======
            <JuegosPopulares categoriaSeleccionada={categoriaSeleccionada} />
>>>>>>> 5fe29ef6d3d9340b08dae16f9a64a6d45aad9864
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;