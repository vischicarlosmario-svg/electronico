import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import JuegosPopulares from "../Home/estructuraHome/JuegosPopulares";
import ProductosPrueba from "../../../data/productosPrueba";

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
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto</Form.Label>
         <Form.Control type="text" placeholder="Ej: Juego" 
         {...register("nombreProducto", {
          required: "El nombre del producto es un dato obligatorio",
          minLength: {
            value: 50,
            message: "El nombre del producto debe tener al menos 50 caracteres",
          },
          maxLength: {
            value: 100,
            message: "El nombre del producto debe tener como maximo 100 caracteres",
          }
         })}/>
         <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control
           type="number"
           placeholder="Ej: 10USD"
           {...register("precio", {
            required: "El precio del producto es un dato obligatorio",
            min: {
              value: 1,
              message: "El precio minimo del producto debe ser al menos $1",
            },
            max: {
              value: 1000,
              message: "El precio minimo del producto debe ser de hasta $1000",
            }
           })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
          type="text"
          placeholder="Ej: https://www.pexels.com/es-es"
          {...register("imagen", {
            required: "La URL de la imagen es un dato obligatorio",
            pattern: {
              value: /^https?:\/\/[^\s]+\.(png|jpg|jpeg|gif|bmp|webp|svg)$/,
              message: "La imagen debe ser un url de imagen valida terminada en (png|jpg|jpeg|gif|bpm|webp|svg)",
            }
          })}
          />
        </Form.Group>
      </Form>
    </section>
  )
}

export default FormularioProducto