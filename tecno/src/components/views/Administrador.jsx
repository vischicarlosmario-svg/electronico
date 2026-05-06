import { Button, Table } from "react-bootstrap"
import { Link } from "react-router"
import ItemProducto from "./Producto/ItemProducto"
import borrarUsuario from "./Producto/ItemUsuario"
import Swal from "sweetalert2"
import { useEffect } from "react"

const Administrador = ({ setProductos, productos, usuarios, setUsuarios }) => {
  console.log("productos recibidos", productos?.length)

  const cargarProductosPrueba = () => {
    setProductos(productosPrueba)

  
  }
  return (
    <section className="container">
      <div className="justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Link className="btn btn-primary me-2" to="crear">
          Crear
        </Link>
      </div>
      <hr />
      <Table responsive bordered hover variant="dark" className="container">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen del producto</th>
            <th>Categoria</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(productos) && productos.length > 0 && (
            productos.map((itemProducto, indice) => <ItemProducto itemProducto={itemProducto} key={itemProducto.id || indice} fila={indice + 1} setProductos={setProductos} productos={productos}></ItemProducto>)
          )}
        </tbody>
      </Table>
      <h2 className="mt-5">Usuarios Registrados</h2>
      <hr />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <ItemUsuario 
              key={u.email} 
              usuario={u} 
              fila={index + 1} 
              usuarios={usuarios}
              setUsuarios={setUsuarios}
            />
          ))}
        </tbody>
      </Table>
    </section>
    

    
  )
}

export default Administrador