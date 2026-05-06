import { Table, Button } from "react-bootstrap"
import Swal from "sweetalert2"

const borrarUsuario = (emailBorrar) => {
    if (emailBorrar === import.meta.env.VITE_API_EMAIL) {
        Swal.fire("Acceso denegado", "no puedes eliminar la cuenta de un administrador", "error")
    }
    Swal.fire({
        title: `Borrar usuario ${emailBorrar}`,
        text: "El usuario ya no podra iniciar sesion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "si"
    }).themn((result) => {
        if (result.isConfirmed) {
            const nuevosUsuarios = usuarios.filter((u) => u.email !== emailBorrar);
            setUsuarios(nuevosUsuarios)
            localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios))
            Swal.fire("Eliminado", "Usuario borrado correctamente", "success")
        }
    })
}