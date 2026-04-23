import { BrowserRouter, Routes, Route } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/views/Home"
import DetalleDeProducto from "./components/views/Producto/DetalleDeProducto"
import Login from "./components/views/Login"
import Administrador from "./components/views/Administrador"
import FormularioProducto from "./components/views/Producto/FormularioProducto"
import Error404 from "./components/views/Error404"
import { useEffect, useState } from "react"
import ProtectorAdmin from "./components/routes/ProtectorAdmin"
import './App.css'

function App() {
  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogeado, setUsuarioLogueado] = useState(sesionUsuario);
  const [productor, setProductos] = useState([])

  useEffect(() => {
    sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogeado))
  }, [usuarioLogueado]
  )

  return (
    <>
      <BrowserRouter>
        <Menu>  usuarioLogueado={usuarioLogeado} setUsuarioLoguado={setUsuarioLogueado}</Menu>
        <main>
          
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
