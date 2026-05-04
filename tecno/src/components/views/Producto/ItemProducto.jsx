import { Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router"
import Swal from "sweetalert2"

const ItemProducto = ({itemProducto, setProductos, borrarProducto, fila, productos}) => {

  const confirmarBorrado = () => {
    Swal.fire({
      title: `Borrar ${itemProducto.nombreProducto}?`,
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        const productosFiltrados = productos.filter((p) => p.id !== itemProducto.id);
        setProductos(productosFiltrados);
        
        Swal.fire("Eliminado", "El producto ha sido borrado", "success");
      }
    });
  };

  return (
    <>
    <tr className="text-center">
      <td>{fila}</td>
      <td>${itemProducto.nombreProducto}</td>
      <td>${itemProducto.precio}</td>
      <td>
        <img src={itemProducto.imagen} alt="imagen producto" />
      </td>
      <td>${itemProducto.categoria}</td>
      {/* <td>${ItemProducto.descripcion_breve}</td>
      <td>${ItemProducto.descripcion_amplia}</td> */}
      <td className="text-center">
        <Link className="btn btn-warning me-2" to={`editar/:id/${itemProducto.id}`}>
        <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={confirmarBorrado}>
          <i className="bi bi-trash-fill"></i>
        </Button>
      </td>
    </tr>
    </>
  )
}

export default ItemProducto;
