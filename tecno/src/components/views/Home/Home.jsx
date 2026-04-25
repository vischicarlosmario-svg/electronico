import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {

  const listaDeJuegos= []

  const juegosPopulares = []

  }

  return (
    <>
        <img
        className="banner shadow-lg rounded-3"
        alt="fondo cafe"
      />
 <Container className="mt-5 cabin-sketch-regular">
        <h1 className="display-4 cabin-sketch-bold">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Buscar un producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del producto"
            />
          </Form.Group>
        </Form>
        <Row>
          <CardProducto></CardProducto>
          {/* <p>No hay productos disponibles</p> */}
        </Row>
      </Container>
    </>
  );

export default Home;
