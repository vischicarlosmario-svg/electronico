import { Button, Table } from "react-bootstrap"
import { Link } from "react-router"

import ItemProducto from "./Producto/ItemProducto"
import productosPrueba from "../../data/productosPrueba"
import Swal from "sweetalert2"

const Administrador = ({ setProductos, productos }) => {

  const cargarProductosPrueba = () => {
    setProductos(productosPrueba)
  }
  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        
          <Link className="btn btn-primary me-2" to="crear">
            <i className="bi bi-file-earmark-plus"></i> Crear
          </Link>
          <Button variant="info" className="text-light" onClick={cargarProductosPrueba}><i className="bi bi-database-fill-up"></i></Button>
        
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
            </tr>
          </thead>
          <tbody>
            {Array.isArray(productos) && productos.length > 0 && (
              productos.map((itemProducto, indice) => <ItemProducto itemProducto={itemProducto} key={itemProducto.id || indice} fila={indice + 1} setProductos={setProductos} productos={productos}></ItemProducto>)
            )}
          </tbody>
        </Table>
    </section>
  )
}

export default Administrador
