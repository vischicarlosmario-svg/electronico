import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego.jsx'
import ProductosPrueba from "../../../data/ProductosPrueba"

const Novedades = ({nombreProducto, precio, imagen}) => {
  return (
    <>
        <div className="novedades">
        <div className="juegosTitulo">
            <h2>novedades</h2>
            <div className="row">
                {ProductosPrueba.slice(7,9).map((juego) => 
                <div className="col-lg mb-4"key={juego.id}>
                  <CardJuego
                    nombreProducto={juego.nombreProducto}
                    precio={juego.precio}
                    imagen={juego.imagen}
                  />
                </div>
                )}
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Novedades
