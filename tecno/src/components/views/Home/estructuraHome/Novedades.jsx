import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from '../cards/CardJuego.jsx'
import ProductosPrueba from "../../../../data/ProductosPrueba.jsx"

const Novedades = () => {
  return (
    <>
      <div className="novedades container-fluid">
        <div className="row justify-content-center">

          {ProductosPrueba.slice(6, 8).map((juego) => (
            <div className="col-6 col-md-4 col-lg-5 mb-3" key={juego.id}>
              <CardJuego
                id={juego.id}
                nombreProducto={juego.nombreProducto}
                precio={juego.precio}
                imagen={juego.imagen}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Novedades