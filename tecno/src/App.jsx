import { BrowserRouter, Routes, Route } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/views/Home/Home.jsx"
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
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  const [productos, setProductos] = useState([])

  useEffect(() => {
    sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogueado))
  }, [usuarioLogueado]
  )

  return (
    <>
      <BrowserRouter>
        <Menu>usuarioLogueado={usuarioLogueado} setUsuarioLoguado={setUsuarioLogueado}</Menu>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detalle" element={<DetalleDeProducto/>}/>
            <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}/>
            <Route path="/Adiministrador" element={<ProtectorAdmin usuarioLogueado={usuarioLogueado}/>}>
              <Route index element={<Administrador productos={productos} setProductos={setProductos}></Administrador>}/>
              <Route path="crear" element={<FormularioProducto titulo="Crear Producto"></FormularioProducto>}/>
              <Route path="editar/:id" element={<FormularioProducto titulo="Editar Producto"></FormularioProducto>}/>
            </Route>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
