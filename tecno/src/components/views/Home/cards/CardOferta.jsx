import 'bootstrap/dist/css/bootstrap.min.css'
import ProductosPrueba from "../../../../data/ProductosPrueba"

const CardOferta = ({nombreProducto, imagen, descuente, precio, precioNuevo}) => {
    const precioNuevo = ({});

  return (
    //este componente todavia no esta en uso
    <>
    <div className="container my-4">
        <div className="card h-100"> 
        <img src={imagen} alt={nombreProducto} />
        <div className="card-body">
            <h6 className="card-title">{nombreProducto}</h6>
            <p className="card-text">{precio}</p>
            <p className="card-text">{precioNuevo}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardOferta
