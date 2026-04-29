import { Button, Table } from "react-bootstrap"
import { Link } from "react-router"
import ItemProducto from "./Producto/ItemProducto"
import productosPrueba from "../../data/ProductosPrueba"
// import { listaProductos } from "../../helpers/queries.js"
import Swal from "sweetalert2"

const Administrador = ({ setProductos, productos }) => {

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
        <hr />
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Imagen del producto</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((itemProducto, indice) => <ItemProducto itemProducto={itemProducto} key={itemProducto.id} fila={indice + 1} setProductos={setProductos}></ItemProducto>)
            }
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default Administrador
