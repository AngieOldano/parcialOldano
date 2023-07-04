import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sheHulkDaredevil from '../assets/shehulk-daredevil.jpg'
import spiderverse from '../assets/spiderverse.png'
import deadpoolWolverine from '../assets/WolverineDeadpool.png'


const ControlledCarousel = ({setSearch}) => {
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
          src={sheHulkDaredevil}
          alt="First slide"
          onClick={() => setSearch("&sharedAppearances=1009262,1009583")}
        />
        <Carousel.Caption>
          <h3>She Hulk & Daredevil</h3>
          <p>Shared appearances!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={deadpoolWolverine}
          alt="Second slide"
          onClick={() => setSearch("&sharedAppearances=1009718,1009268")}
        />

        <Carousel.Caption>
          <h3>Deadpoll & Wolverine</h3>
          <p>Shared appearances!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={spiderverse}
          alt="Third slide"
          onClick={()=>setSearch("&titleStartsWith=Spider-Verse")}
        />
        <Carousel.Caption>
          <h3>Spider Verse Comics!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;