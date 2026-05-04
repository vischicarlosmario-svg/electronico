import { BrowserRouter, Routes, Route } from "react-router";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Home from "./components/views/Home/Home";
import DetalleDeProducto from "./components/views/Producto/DetalleDeProducto";
import Login from "./components/views/Login";
import Administrador from "./components/views/Administrador";
import FormularioProducto from "./components/views/Producto/FormularioProducto";
import Error404 from "./components/views/Error404";
import { useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import "./App.css";
import ProductosPrueba from "./data/productosPrueba";
import Registro from "./components/views/Registro";

function App() {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;

  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem("productosKey");
    return productosGuardados
      ? JSON.parse(productosGuardados)
      : ProductosPrueba;
  });

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<DetalleDeProducto />} />
          <Route
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />

          {/* ✅ REGISTRO FUERA */}
          <Route path="/registro" element={<Registro />} />

          <Route
            path="/Administrador"
            element={<ProtectorAdmin usuarioLogueado={usuarioLogueado} />}
          >
            <Route
              index
              element={
                <Administrador
                  productos={productos}
                  setProductos={setProductos}
                />
              }
            />
            <Route
              path="crear"
              element={<FormularioProducto titulo="Crear Producto" />}
            />
            <Route
              path="editar/:id"
              element={<FormularioProducto titulo="Editar Producto" />}
            />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;