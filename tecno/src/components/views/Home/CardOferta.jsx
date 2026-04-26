import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import productossPrueba from "../../../data/productosPrueba"

const CardOferta = ({nombreProducto, imagen, descuente, precio, precioNuevo}) => {
    const precioNuevo = ({});

  return (
    <>
    <div className="container my-4">
        <div className="card h-100"> 
        <img src={juego.imagen} alt={juego.nombreProducto} />
        <div className="card-body">
            <h6 className="card-title">{juego.nombreProducto}</h6>
            <p className="card-text">{juego.precio}</p>
            <p className="card-text">{juego.precioNuevo}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardOferta
