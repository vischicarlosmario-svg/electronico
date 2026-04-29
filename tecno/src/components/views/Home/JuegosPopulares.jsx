import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from './CardJuego.jsx'
import ProductosPrueba from "../../../data/ProductosPrueba.jsx"


const JuegosPopulares = ({nombreProducto, precio, imagen}) => {
  return (
    <>
    <div className="juegosPopulares container-fluid">
        <div className="juegosTitulo ">
            <h2>Juegos populares</h2>
            <div className="row justify-content-center">
                {ProductosPrueba.slice(0,5).map((juego) => (
                <div className="col-6 col-md-4 col-lg-2 mb-3"key={juego.id}>
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
