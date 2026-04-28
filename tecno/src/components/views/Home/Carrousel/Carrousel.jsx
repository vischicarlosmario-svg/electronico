import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import cyberpunk from "../../../../assets/cyberpunk.jpg";
import expedition33 from '../../../../assets/expedition33.jpg';
import residentEvilRequiem from '../../../../assets/residentEvilRequiem.jpg';

const Carrousel = () => {
  return (
    <main>
    <div className="carrusel">
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
           <img src={cyberpunk} alt="cyberpunk" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={expedition33} alt="Expedition 33" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={residentEvilRequiem} alt="resident Evil Requiem" className="d-block w-100"/>
        </Carousel.Item>
      </Carousel>
    </div>
    </main>
  )
}

export default Carrousel;
