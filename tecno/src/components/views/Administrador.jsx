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
      <div className="d-flex justify-content-between alig-item-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <div>
          <Link className="btn btn-primary me-2" to="./crear">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </div>
        <hr/>
        <Table responsive striped bordered hover variant="dark">

        </Table>

      </div>
    </section>
  )
}

export default Administrador
