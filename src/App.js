import React, { Fragment } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import ControlledCarousel  from './components/ControlledCarousel';


function App() {
  return (
    <Fragment> 
      <div>
        <Header/>
          <ControlledCarousel/>
         
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" roundedCircle />
              </Col>
              <Col xs={6} md={4}>
                <Image width={100} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" thumbnail />
              </Col>
            </Row>
          </Container>

          <Container className='m-5'>
            <Row>
              <Col xs={12} md={6}>
                <img className="img-fluid" width={500} height={300} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" alt="Imagen" />
              </Col>
              <Col xs={12} md={6} className="d-flex align-items-center">
                <div>
                  <h2>Título del texto</h2>
                  <h3>Contenido del texto...</h3>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer/>
      </div>
    </Fragment>
  );
}

export default App;