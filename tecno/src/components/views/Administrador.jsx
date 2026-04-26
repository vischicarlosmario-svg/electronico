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

  return (
    <section className="container">
      
    </section>
  )
}

export default Administrador
