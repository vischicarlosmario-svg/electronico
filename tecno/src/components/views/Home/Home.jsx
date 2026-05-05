import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from "./Carrousel/Carrousel";
import JuegosPopulares from './estructuraHome/JuegosPopulares.jsx';
import Novedades from './estructuraHome/Novedades.jsx';

const Home = () => {
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

      {/* 🔥 JUEGOS POPULARES */}
      <section className="section">
        <h2 className="section-title">Juegos Populares</h2>
        <div className="container">
          <div className="section-content">
            <JuegosPopulares />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;