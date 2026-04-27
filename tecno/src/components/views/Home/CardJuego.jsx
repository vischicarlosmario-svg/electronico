import 'bootstrap/dist/css/bootstrap.min.css'
import ProductosPrueba from '../../../data/ProductosPrueba'
const CardJuego = ({nombreProducto, precio, imagen}) => {
  return (
    <>
      <div className="card h-100"> 
        <img src={imagen} alt={nombreProducto} />
        <div className="card-body">
            <h6 className="card-title">{nombreProducto}</h6>
            <p className="card-text">{precio}</p>
        </div>
      </div>
    </>
  )
}

export default CardJuego
