import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import {cyberpunk, expedition33, residentEvilRequiem } from 'assets';

const Carrousel = () => {
  return (
    <main>
      interval={3000},
      fade
      controls={true}
    <div className="carrusel">
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <CarouselImage className="d-block w100" alt="Cyberpunk">{cyberpunk}</CarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage className="d-block w100" alt="Expedition 33">{expedition33}</CarouselImage>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage className="d-block w100" alt="Resident Evil Requiem">{residentEvilRequiem}</CarouselImage>
        </Carousel.Item>
      </Carousel>
    </div>
    </main>
  )
}

export default Carrousel
