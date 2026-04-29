import { Container, Row, Col, Card } from "react-bootstrap"
import ProductosPrueba from "../../../data/ProductosPrueba"
import { useParams } from "react-router";


const DetalleDeProducto = ({nombreProducto, precio, imagen, categoria, descripcion_breve, descripcion_amplia}) => {

  const { id } = useParams();
  console.log("1. El ID que llegó a la URL es:", id);
 

  const mostrarJuego = ProductosPrueba.find((juego) => juego.id.toString() === id);
   console.log("2. ¿Encontró el juego en la base de datos?:", mostrarJuego);
  if (mostrarJuego) {}
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
