import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego'
import productossPrueba from "../../../data/productosPrueba"

const Ofertas = () => {
  return (
    <>
      <div className="">
        <div className="">
            <h2>
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
            </h2>
        </div>
      </div>
    </>
  )
}

export default Ofertas
