import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/Ai';
import { useState } from "react"

const Login = ({ setUsuarioLogueado }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => { setShowPassword(!showPassword) }
  const {
    register,
    handelerSubmit,
    formState: { errors },
  } = useForm();

  const navigacion = useNavigate()

  const onSubmit = (data) => {
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.pasword === import.meta.env.VITE_API_PASSWORD
    ) {
      console.log('Aqui logueo al usuario');
      setUsuarioLogueado(true);
      Swal.fire({
        title: "Bienvenido Sr Administrador",
        text: "Iniciando sesion correctamente",
        icon: "success",
      });
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Ocurrio un error, intente nuevamente",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }

  }

  return (
    <>
      <Card className="shadow p-3 mb-5 bg-body rounded card-login">
        <Row xs={1} md={2}>
          <Col>
            <Card.body>
              <h1 className="text-center mb-4">Iniciar secion</h1>
              <Form onSubmit={habdSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: juanperez@mail.com"
                    {...register("email", {
                      required: "El mail es un dato obligatorio",
                      pattern: {
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "El e-mail debe ser un correo valido, por ej. juanperez@gmail"
                      }
                    })}
                  />
                  <Form.text className="text-danger">
                    {errors.mail?.message}
                  </Form.text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type={showPassword === false ? 'password' : 'text'}
                    placeholder="Ingresa la contraseña correspondiente"
                    {...register("password", {
                      required: "La contraseña es un delito obligatorio",
                      pattern: {
                        value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message: "La contraseña debe tener entre y 16 caracteres"
                      }
                    })}
                  />
                  <Button className="mt-3">
                    {showPassword === false ? (
                      <AiFillEyeInvisible onClick={handlePassword} />
                    ) : (
                      <AiFillEye onClick={handlePassword} />)
                    }
                  </Button>
                  <Form.Text className="text-danger">
                    {errors.pasword?.message}
                  </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Iniciar sesion.
                </Button>
              </Form>
            </Card.body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

  export default Login