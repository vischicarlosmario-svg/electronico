import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";
import Login from "../views/Login";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado(false);
    localStorage.removeItem("usuarioKey");
    navegacion("/");
    
  };

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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;