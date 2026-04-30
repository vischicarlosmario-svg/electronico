import { Container, Row, Col, Card, Button } from "react-bootstrap"
import CardJuego from "../Home/cards/CardJuego";
import JuegosPopulares from "../Home/estructuraHome/JuegosPopulares.jsx";
import Novedades from "../Home/estructuraHome/Novedades.jsx";
import ProductosPrueba from "../../../data/ProductosPrueba.jsx"
import { useParams } from "react-router";


const DetalleDeProducto = ({nombreProducto, precio, imagen, categoria, descripcion_breve, descripcion_amplia}) => {

  const { id } = useParams();
  console.log("El id que llegó a la url es:", id);
 

  const mostrarJuego = ProductosPrueba.find((juego) => juego.id.toString() === id);
   console.log("Encontro el juego en la base de datos?:", mostrarJuego);
  return (
     <Container className="my-3 mainSection cabin-sketch-regular">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={mostrarJuego.imagen}
              alt={mostrarJuego.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-2">{mostrarJuego.nombreProducto}</Card.Title>
              <hr />
              <Card.Text className="fs-5">
              {mostrarJuego.descripcion_breve}
              <br/>
              <br/>
              <span className="fw-semibold ">Categoria:</span> {mostrarJuego.categoria}
              <br className='mb-3'/>
              <span className="fw-semibold ">Precio: {mostrarJuego.precio}</span></Card.Text>
              <Button className="btn btn-succes btn-lg w-50">
                Comprar
              </Button>
              <Button className="btn btn-succes btn-lg w-50" >
                Añadir al carrito
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default DetalleDeProducto
