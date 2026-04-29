import { Container, Row, Col, Card } from "react-bootstrap"
import ProductosPrueba from "../../../data/ProductosPrueba"


const DetalleDeProducto = ({nombreProducto, precio, imagen, categoria, descripcion_breve, descripcion_amplia}) => {
  return (
     <Container className="my-3 mainSection cabin-sketch-regular">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={DetalleDeProducto.imagen}
              alt={DetalleDeProducto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-2">{DetalleDeProducto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text className="fs-5">
              {DetalleDeProducto.descripcion_breve}
              <br/>
              <br/>
              <span className="fw-semibold ">Categoria:</span> {DetalleDeProducto.categoria}
              <br className='mb-3'/>
              <span className="fw-semibold ">Precio: {DetalleDeProducto.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default DetalleDeProducto
