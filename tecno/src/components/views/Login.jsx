import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react"

const Login = ({ setUsuarioLogueado }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handlePassWord = () => {setShowPassword(!showPassword)}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate()

  const onSubmit = (data) => {
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.password === import.meta.env.VITE_API_PASSWORD
    ) {
      console.log('aqui logueo al usuario');
      setUsuarioLogueado(true);
      //redireccionar a la pagina del administrador
      Swal.fire({
        title: "Bienvenido Administrador",
        text: "Iniciaste sesion correctamente",
        icon: "success",
      });
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }

  }

  return (
    <>
      <Card className=" shadow p-3 mb-5 bg-body rounded card-login">
        <Row xs={1} md={2}>
          <Col>
            <Card.Body>
              <h1 className="text-center mb-4">Iniciar sesion</h1>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: juanperez@mail.com"
                    {...register("email", {
                      required: "El mail es un dato obligatorio",
                      pattern: {
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "El mail debe ser un correo valido por ej: juanperez@mail.com"
                      }
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.mail?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type={showPassword === false ? 'password': 'text'}
                    placeholder="Ingresa una contraseña"
                    {...register("password", {
                      required: "La contraseña es un dato obligatorio",
                      pattern: {
                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message: "La contraseña debe tener entre 8 y 16 caracteres, al menos una minúscula, al menos una mayuscula y al menos un caracter especial"
                      }
                    })}
                  />
                  <Button className="mt-3">
                    {showPassword === false ? (
                      <AiFillEyeInvisible onClick={handlePassWord} />
                    ) : (
                      <AiFillEye onClick={handlePassWord} />)
                    }
                  </Button>
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Login