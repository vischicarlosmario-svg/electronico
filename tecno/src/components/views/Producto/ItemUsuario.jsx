import { Table, Button } from "react-bootstrap"
import Swal from "sweetalert2"

const ItemUsuario = ({ usuario, fila, usuarios, setUsuarios }) => {

const borrarUsuario = (emailBorrar) => {
    if (emailBorrar === import.meta.env.VITE_API_EMAIL) {
        return Swal.fire("Acceso denegado", "no puedes eliminar la cuenta de un administrador", "error")
    }
    Swal.fire({
        title: `Borrar usuario ${emailBorrar}`,
        text: "El usuario ya no podra iniciar sesion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "si"
    }).then((result) => {
        if (result.isConfirmed) {
            const nuevosUsuarios = usuarios.filter((u) => u.email !== emailBorrar);
            setUsuarios(nuevosUsuarios)
            localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios))
            Swal.fire("Eliminado", "Usuario borrado correctamente", "success")
        }
    })
}

return (
    <>
    <tr>
        <td>{fila}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.email}</td>
        <td className="text-center">
            <Button variant="danger" size="sm" onClick={() => borrarUsuario(usuario.email)}>Borrar usuario</Button>
        </td>
    </tr>
    </>


    )
}
export default ItemUsuario