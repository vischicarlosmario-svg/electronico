import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

const Carrousel = () => {
  return (
    <div className="carrusel">
      <Carousel>
        <Carousel.Item>
          <CarouselImage text="First slide">"imagen"</CarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Second slide">"imagen"</CarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage text="Third slide">"imagen"</CarouselImage>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carrousel
