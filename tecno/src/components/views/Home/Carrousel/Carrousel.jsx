import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import {cyberpunk, expedition33, residentEvilRequiem } from 'assets';

const Carrousel = () => {
  return (
    <main>
    <div className="carrusel">
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <Image className="d-block w-100" src={cyberpunk} alt="Cyberpunk"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={expedition33} alt="Expedition 33"></Image>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={residentEvilRequiem} alt="Resident Evil Requiem"></Image>
        </Carousel.Item>
      </Carousel>
    </div>
    </main>
  )
}

export default Carrousel;
