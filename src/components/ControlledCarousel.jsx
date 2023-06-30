import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);



  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src="https://images.comicbooktreasury.com/wp-content/uploads/2022/04/The-Avengers-100-Avengers-Reading-Order.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/09/hipertextual-disney-ofrecera-series-animadas-clasicas-spider-man-x-men-4-fantasticos-2019104760.jpg?fit=1790%2C950&quality=50&strip=all&ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src="https://www.egames.news/__export/1683219613900/sites/debate/img/2023/05/04/marvel-spider-man-2-comic-gratis-free.jpg_242310155.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;