import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../../App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrousel from "./Carrousel/Carrousel"
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx'
import Novedades from './estructuraHome/Novedades.jsx'

const Home = () => {

  //Producto para agregar al carrito
  const [allProducto, setAllProducto] = useState([]);
  //Total a pagar
  const [Total, setTotal] = useState(0);
  //Contador de productos
  const [contadorProducto, setContadorProducto] = useState(0);

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
        <div className="container">
          <div className="section-content">
            <JuegosPopulares 
              allProducto={allProducto}
              setAllProducto={setAllProducto}
              Total={Total}
              setTotal={setTotal}
              contadorProducto={contadorProducto}
              setContadorProducto={setContadorProducto}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
