import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego'
import productossPrueba from "../../../data/productosPrueba"

const JuegosPopulares = () => {
  return (
    <>
    <div className='juegosPopulares'>
        <div className='juegosTitulo'>
            <h2>Juegos populares</h2>
            <div className="row">
                {productos.map((juego) => 
                <div className="col-lg mb-4">
                  <CardJuego>
                    titulo={juego.nombreProducto}
                    precio={juego.precio}
                    imagen={juego.imagen}
                  </CardJuego>
                </div>
                )}
            </div>

        </div>
      
    </div>
    </>
  )
}

export default JuegosPopulares
