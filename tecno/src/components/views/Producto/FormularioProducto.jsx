import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import JuegosPopulares from "../Home/estructuraHome/JuegosPopulares";
import ProductosPrueba from "../../../data/productosPrueba";
import ItemProducto from "./ItemProducto";
// import ListaProducto from "./ListaProducto";


export const FormularioProducto = ({ titulo }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem('productosKey')
    return productosGuardados ? JSON.parse(productosGuardados) : ProductosPrueba
  });

  useEffect(() => {
    localStorage.setItem('productosKey', JSON.stringify(productos));
  }, [productos]);

  const posteriorValidacion = (data) => {
    const nuevoProducto = { ...data, id: Date.now() };
    setProductos([...productos, nuevoProducto]);

    reset()
    Swal.fire({
      icon: 'success',
      title: 'producto guardado',
      showConfirmButton: false
    })
  }

  const borrarProducto = (idProducto) => {
    const productosFiltrados = productos.filter(p => p.id !== idProducto)
    setProductos(productosFiltrados)

  }

  const editarProducto = ({ productos, setProductos }) => {
    const productosFiltrados = productos.map(p => p.id !== idProducto)
    setProductos(productosFiltrados)
  }



  return (

    <>
      <section className="container mainSection">
        <h1 className="display-4 mt-5">{titulo}</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(posteriorValidacion)}>
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
              })} />
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
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              {...register("categoria", { required: "Debe seleccionar una categoria", })}>
              <option value="Accion">Accion</option>
              <option value="Aventuras">Aventuras</option>
              <option value="Un jugador">Un jugador</option>
              <option value="Multijugador">Multijugador</option>
              <option value="Estrategia">Estrategia</option>
              <option value="Tierno">Tierno</option>
              <option value="Shooter">Shooter</option>
              <option value="Primera persona">Primera persona</option>
              <option value="Tercera Persona">Tercera persona</option>
              <option value="Sandbox">Sandbox</option>
              <option value="Casual">Casual</option>
              <option value="Competitivo">Competitivo</option>
              <option value="Ciencia ficcion">Ciencia ficcion</option>
              <option value="Fantasia">Fantasia</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionBreve">
            <Form.Label>Descripcion breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: juego de accion diviertete"
              as="textarea"
              rows={4}
              {...register("descripcion_breve", {
                required: "La descripcion es un dato obligatorio",
                minLength: {
                  value: 100,
                  message: "La descripcion debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "La descripcion debe tener como maximo 500 caracteres"
                }
              })}
            />
            <Form.Text className="text-danger">{errors.descripcion_breve?.message} </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionAmplia">
            <Form.Label>Descripcion Amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juego de accion diviertete y mas"
              as="textarea"
              rows={4}
              {...register("descripcion_amplia", {
                required: "La descripcion amplia es un dato obligatorio",
                minLength: {
                  value: 300,
                  message: "La descripcion debe tener almenos 300 caracteres"
                },
                maxLength: {
                  value: 500,
                  message: "La descripcion debe tener como maximo 500 caracteres"
                }
              })}
            />
            <Form.Text className="text-danger">{errors.descripcion_amplia?.message}</Form.Text>
          </Form.Group>
          <Button type="submit" variant="success">
            Guardar
          </Button>
        </Form>
      </section>
    </>
  );
};

export default FormularioProducto


