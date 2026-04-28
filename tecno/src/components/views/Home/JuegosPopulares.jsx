import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego.jsx'
import ProductosPrueba from "../../../data/ProductosPrueba"


const JuegosPopulares = ({nombreProducto, precio, imagen}) => {
  return (
    <>
    <div className="juegosPopulares">
        <div className="juegosTitulo">
            <h2>Juegos populares</h2>
            <div className="row">
                {ProductosPrueba.slice(0,6).map((juego) => (
                <div className="col-lg-4 mb-3"key={juego.id}>
                  <CardJuego
                    imagen={juego.imagen}
                    nombreProducto={juego.nombreProducto}
                    precio={juego.precio}
                    
                  />
                </div>
               ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default JuegosPopulares
