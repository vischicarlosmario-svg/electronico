import 'bootstrap/dist/css/bootstrap.min.css'
import CardJuego from '../cards/CardJuego.jsx'
import ProductosPrueba from "../../../../data/ProductosPrueba.jsx"
import { Button } from 'react-bootstrap'
import { useState } from 'react'




//este componente saca el modelo de la card del componente CardJuego
const JuegosPopulares = ({
  nombreProducto,
  precio,
  imagen,
  allProducto,
  setAllProducto,
  contadorProducto,
  setContadorProducto,
  total,
  setTotal,
}) => {
  const onAddProducto = juego => {
    if (allProducto.find(item => item.id === juego.id)) {
      const producto = allProducto.map(item => item.id === juego.id ? {
        ...item, quantity: item.quantity + 1
      } : item);
      setContadorProducto(contadorProducto + juego.quantity)
      return setAllProducto([...producto])
    }
    setTotal(total + juego.price * juego.quantity);
    setContadorProducto(contadorProducto + juego.quantity);
    setAllProducto([...allProducto, juego]);
  }
  setTotal(total + juego.price * juego.quantity);
  setContadorProducto(contadorProducto + juego.quantity);
  setAllProducto([...allProducto, juego]);
};

return (
  <>
    <div className="juegosPopulares container-fluid">
      <div className="juegosTitulo ">
        <div className="row justify-content-center">
          {ProductosPrueba.slice(0, 5).map((juego) => (
            <div className="col-6 col-md-4 col-lg-2 mb-3" key={juego.id}>
              <CardJuego
                id={juego.id}
                imagen={juego.imagen}
                nombreProducto={juego.nombreProducto}
                precio={juego.precio}

              />
              <Button className='m-2' onClick={() => onAddProducto(juego)}>Comprar</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default JuegosPopulares
