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

  const navigacio = useNavigate()

}










const Login = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login
