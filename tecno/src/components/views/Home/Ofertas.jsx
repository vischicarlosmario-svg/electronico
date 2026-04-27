import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego'
import ProductosPrueba from "../../../data/ProductosPrueba"

const Ofertas = () => {
  return (
    <>
      <div className="container">
        <div className="">
            <h2>OFERTAS!</h2>
                <div className="row">
                {productos.slice(7,14).map((juego) => 
                <div className="col-lg mb-4"key={juego.id}>
                  <CardJuego
                    titulo={juego.nombreProducto}
                    precio={juego.precio}
                    imagen={juego.imagen}
                  />
                  <Button onSubmit>Comprar</Button>
                </div>
                )}
                </div>
        </div>
      </div>
    </>
  )
}

export default Ofertas
