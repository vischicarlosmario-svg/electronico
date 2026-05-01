import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import JuegosPopulares from "../Home/estructuraHome/JuegosPopulares";

const FormularioProducto = ({titulo}) => {
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const {id} = useParams();

  const navegacion = useNavigate()

  const buscarProducto = async () => {
    if(titulo === "Editar Producto") {
      console.log(id);
      const respuesta = await obtenerProductoPorID(id);
      if (respuesta.status === 200) {
        const productoBuscado = await respuesta.json();
        console.log(productoBuscado);
        setValue("nombreProducto", productoBuscado.nombreProducto);
        setValue("precio", productoBuscado.precio);
        setValue("imagen", productoBuscado.imagen);
        setValue("descripcion_breve", productoBuscado.descripcion_breve);
        setValue("descripcion_amplia", productoBuscado.descripcion_amplia);
        setValue("categoria", productoBuscado.categoria);
      } else {
        alert("Ocurrio un error, intentelo mas tarde")
      }
    }
  }

  useEffect(() => {
    if(titulo === "Editar Producto"){
      buscarProducto()
    }
  }, []); 

  const onSubmit = async(juego) => {
    console.log(juego);
    if (titulo === "Crear Producto") {
      const respuesta = await crearProducto(juego)
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text:`El producto ${producto.nombreProducto} se creo correctamente`,
          icon: "succes"
        });
        reset();
      } else {
        alert("Ocurrio un error")
      }
    } else {
      const respuesta = await editarProducto(id, producto)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto modificado",
          text: `El producto ${producto.nombreProducto} se actualizo correctamente`,
          icon: "succes"
        });
        navegacion("/Administrador");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo actualizar el ${producto.nombreProducto}`,
          icon: "error"
        })
      }

    }
  }


  return (
    <>
      
    </>
  )
}

export default FormularioPro