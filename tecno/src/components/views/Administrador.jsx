import { Button, Table } from "react-bootstrap"
import { Link } from "react-router"
import ItemProducto from "./Producto/ItemProducto"
import productotosPrueba from "../../data/productosPrueba"
import { listaProductos } from "../../helpers/queries"
import Swal from "sweetalert2"

const Administrador = ({setProductos, productos}) => {

  const cargarProductosPrueba = () => {
    setProductos(productosPrueba)
  }

  const obtenerProductos = async () => {
    
  }





  return (
    <div>
      
    </div>
  )
}

export default Administrador
