import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego'
import ProductosPrueba from "../../../data/ProductosPrueba"

const Novedades = () => {
  return (
    <>
        <div className="novedades">
        <div className="juegosTitulo">
            <h2>Juegos populares</h2>
            <div className="row">
                {productos.slice(7,14).map((juego) => 
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

export default Novedades
