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
import ProductosPrueba from "./data/productosPrueba.jsx"
import EditarProducto from "./components/views/Producto/EditarProducto.jsx"
import Registro from "./components/views/Registro.jsx"

function App() {
  const sesionUsuario = JSON.parse(localStorage.getItem("usuarioKey")) || false;
  const productosGuardados = JSON.parse(localStorage.getItem('productoKey')) || [];
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem('productosKey')
    return productosGuardados ? JSON.parse(productosGuardados) : ProductosPrueba
  });

  console.log("estado de productos", productos.length)
  console.log("Estado del usuario", usuarioLogueado)

  return (
    <>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detalle/:id" element={<DetalleDeProducto/>}/>
            <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}/>
            {/* <Route path = " /registro" element={<Registro usuario={usuarios}/>} ></Route> */}
            <Route path="/Administrador" element={<ProtectorAdmin usuarioLogueado={usuarioLogueado}/>}>
              <Route index element={<Administrador productos={productos} setProductos={setProductos}></Administrador>}/>
              <Route path="crear" element={<FormularioProducto titulo="Crear Producto"></FormularioProducto>}/>
              <Route path="editar/:id" element={<EditarProducto titulo="Editar Producto" productos={productos} setProductos={setProductos}></EditarProducto>}/>
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
