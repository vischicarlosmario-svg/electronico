import card from bootstrap

const CardJuego = ({titulo, precio, imagen}) => {
  return (
    <>
      <div className="card h-100"> 
        <img src="" alt="" />
        <div className="card-body">
            <h6 className="card-title">titulo</h6>
            <p className="card-text">precio</p>
        </div>
      </div>
    </>
  )
}

export default CardJuego
