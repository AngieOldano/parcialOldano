import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={3} className='m-3'>
            <img width={200} height={100} src="https://i.pinimg.com/originals/21/07/e2/2107e20536b74138c457f503a975162b.jpg" alt="Logo" />
          </Col>
          <Col md={4} className='d-flex align-items-end justify-content-end'>
            <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
          </Col>
          <Col md={4} className='d-flex justify-content-end mt-3'>
            <ul className="list-inline social-media">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-facebook fs-3"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-twitter custom-twitter fs-3"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-instagram custom-instagram fs-3"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
