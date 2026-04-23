import { Card, Button, Row, Col ,Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import  Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/Ai';
import { useState } from "react"

const Login = ({ setUsuarioLogueado}) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const handlePassword = () => { setShowPassword(!showPassword)}
  const {
    register,
    handelerSubmit,
    formState: { errors },
  } = useForm();

  const navigacion = useNavigate()

  const onSubmit = (data)=>{
    if (
      data.email === import.meta.env.VITE_API_EMAIL &&
      data.pasword === import.meta.env.VITE_API_PASSWORD
    )
  } {
    console.log('Aqui logueo al usuario');
    setUsuarioLogueado(true);
    Swal.fire({
      title: "Bienvenido Sr Administrador",
      text: "Iniciando sesion correctamente",
      icon: "success"
    });
    navegacion("/administrador");
  } else {
    
  }

}










const Login = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login
