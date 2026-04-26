import 'bootstrap/dist/css/bootstrap.min.css'

const CardJuego = ({nombreProducto, precio, imagen}) => {
  return (
    <>
      <div className="card h-100"> 
        <img src={juego.imagen} alt={juego.nombreProducto} />
        <div className="card-body">
            <h6 className="card-title">{juego.nombreProducto}</h6>
            <p className="card-text">{juego.precio}</p>
        </div>
      </div>
    </>
  )
}

export default CardJuego
