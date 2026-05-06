import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import Login from "../views/Login";
import { useState } from "react";

const Menu = ({ usuarioLogueado, setUsuarioLogueado, allProductos, setAllPrductos,contadorProductos, total }) => {

  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado(false);
    localStorage.removeItem("usuarioKey");
    navegacion("/");

  };

  const [active, setActive] = useState(false);
  const onDeleteProduc=(juego)=>{
    const result = allProductos.filter(item => item.id !== juego.id);
    
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fs-2">
          GAME-OVER!!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              HOME
            </NavLink>

            {usuarioLogueado && usuarioLogueado.role === "admin" && (
              <>
                <NavLink to={"/administrador"} className="nav-link">
                  Administrador
                </NavLink>
              </>
            )}

            {usuarioLogueado && (
              <Button variant="dark" onClick={logout}>
                Logout
              </Button>

            )}

            {!usuarioLogueado && (
              <>
                <NavLink to={"/login"} className="nav-link">
                  LOGIN
                </NavLink>

                <NavLink to={"/registro"} className="nav-link">
                  REGISTRO
                </NavLink>

              </>
            )}

          </Nav>
          <div className="container-icon" onClick={() => setActive(!active)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon-cart"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="count-products">
              <span id="contador-productos">{contadorProductos}</span>
            </div>
          </div>
          <div className={`container-cart-product $(active? '', 'hidden-cart')`}>
            {allProductos.length ? (
              <>
                <div className="row-product">
                  {allProductos.map(juego => (
                    <div className="cart-product" key={juego.id}>
                      <span className="cantidad-producto-carrito">
                        {juego.quantity}
                      </span>
                      <span className="titulo-producto-carrito">
                        {juego.nombreProducto}
                      </span>
                      <span className="precio-producto-carrito">
                        ${juego.precio}
                      </span>
                      <sgv
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="curretColor"
                        className="icon-close"
                        onClick={()=> onDeleteProduct(juego)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6112 12"
                        />
                      </sgv>
                    </div>
                  ))}

                </div>
                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>
                <Button className="btn-clear-all m-5">Vaciar compras</Button>
              </>
            ) : (
              <p className="cart-empty">El carrito esta vacio.</p>
            )
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;