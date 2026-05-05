import { Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router"
import Swal from "sweetalert2"

const ItemProducto = ({ itemProducto, setProductos, borrarProducto, fila, productos }) => {

  const confirmarBorrado = () => {
    Swal.fire({
      title: `Borrar ${itemProducto.nombreProducto}?`,
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        const productosNuevos = productos.filter((p) => p.id !== itemProducto.id);
        setProductos(productosNuevos);

        localStorage.setItem("productosKey", JSON.stringify(productosNuevos))

        Swal.fire("Eliminado", "El producto ha sido borrado", "success");
      }
    });
  };

  return (
    <>
      <tr className="text-center">
        <td>{fila}</td>
        <td>{itemProducto.nombreProducto}</td>
        <td>{itemProducto.precio}</td>
        <td>
          <img src={itemProducto.imagen} alt="Imagen producto" className="w-100 m-1 align-items-center" />
        </td>
        <td>{itemProducto.categoria}</td>
        <td alt="Accion" className="justify-content-between align-items-center">{itemProducto.accion}
          <Link className="btn btn-warning" to={`editar/${itemProducto.id}`}>
            Editar
          </Link>
          <Button variant="danger" onClick={confirmarBorrado}>
            borrar
          </Button>
        </td>
      </tr>
    </>
  )
}

export default ItemProducto;



// /* <td>${ItemProducto.descripcion_breve}</td>*/
//     <td>${ItemProducto.descripcion_amplia}</td>
//