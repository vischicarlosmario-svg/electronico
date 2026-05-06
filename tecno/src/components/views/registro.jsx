import { useState } from "react";
import { useNavigate } from "react-router";

const Registro = () => {
  console.log(Registro,length)
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // evitar duplicados
    const existe = usuarios.find(u => u.email === form.email);

    if (existe) {
      alert("El usuario ya existe");
      return;
    }

    usuarios.push(form);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso 🎉");

    navigate("/login");
  };

  return (
    <div className="container text-white mt-5 text-center">
      <h2>Registro</h2>

      <form onSubmit={handleSubmit} className="mt-4">

        <input
          className="form-control mb-3"
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />

        <button className="btn btn-success">
          Registrarse
        </button>

      </form>
    </div>
  );
};

export default Registro;