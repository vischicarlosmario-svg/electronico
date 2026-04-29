import 'bootstrap/dist/css/bootstrap.min.css'
import ProductosPrueba from '../../../data/ProductosPrueba'
const CardJuego = ({nombreProducto, precio, imagen}) => {
  return (
    //modelo de card para usarse en los productos
    <>
    <div className="">
      <div className="card"> 
        <img src={imagen} alt={nombreProducto} />
        <div className="card-body">
            <h6 className="card-title text-white">{nombreProducto}</h6>
            <p className="card-text mt-3">{precio}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default CardJuego
