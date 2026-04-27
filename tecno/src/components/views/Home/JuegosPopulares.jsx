import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego.jsx'
import ProductosPrueba from "../../../data/ProductosPrueba"

const JuegosPopulares = () => {
  return (
    <>
    <div className="juegosPopulares">
        <div className="juegosTitulo">
            <h2>Juegos populares</h2>
            <div className="row">
                {productos.slice(0,6).map((juego) => 
                <div className="col-lg mb-4"key={juego.id}>
                  <CardJuego
                    titulo={juego.nombreProducto}
                    precio={juego.precio}
                    imagen={juego.imagen}
                  />
                </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default JuegosPopulares
