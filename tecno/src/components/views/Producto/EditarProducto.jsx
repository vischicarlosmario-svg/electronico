import { Button, Form } from "react-bootstrap"
import { Link } from "react-router"
import Swal from "sweetalert2"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useParams, useNavigate } from "react-router"

const EditarProducto = ({ productos, setProductos }) => {
    const { id } = useParams();
    const navegacion = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const productoBuscado = productos.find((p) => p.id == id);

        if (productoBuscado) {

            setValue("nombreProducto", productoBuscado.nombreProducto);
            setValue("precio", productoBuscado.precio);
            setValue("imagen", productoBuscado.imagen);
            setValue("categoria", productoBuscado.categoria);
            setValue("descripcion_breve", productoBuscado.descripcion_breve);
            setValue("descripcion_amplia", productoBuscado.descripcion_amplia);
        }
    }, [id, productos, setValue]);

    const onSubmit = (datosEditados) => {
        const productosActualizados = productos.map((p) => p.id == id ? { ...datosEditados, id: p.id } : p
    );

    setProductos(productosActualizados);
    Swal.fire({
        icon: "success",
        title: "Producto actualizado",
        showConfirmButton: false,
    })
    navegacion("/administrador")
    }
    
return (
   <>
   <section className="container mainSection">
      <h1 className="display-4 mt-5">"Editar Productos"</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Producto</Form.Label>
         <Form.Control type="text" placeholder="Ej: Juego" 
         {...register("nombreProducto", {
          required: "El nombre del producto es un dato obligatorio",
          minLength: {
            value: 1,
            message: "El nombre del producto debe tener al menos 1 caracteres",
          },
          maxLength: {
            value: 50,
            message: "El nombre del producto debe tener como maximo 50 caracteres",
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
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {required: "Debe seleccionar una categoria",})}>
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
                value: 50,
                message: "La descripcion debe tener al menos 50 caracteres",
              },
              maxLength: {
                value: 150,
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
              message: "La descripcion debe tener almenos 100 caracteres"
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
)    
}

export default EditarProducto

