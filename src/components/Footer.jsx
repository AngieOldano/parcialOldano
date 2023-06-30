import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/marvelLogo.png';



const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container fluid>
        <Row>
          <Col md={3} className='p-3 text-center text-md-start'>
            <img width={200} height={100} src={logo} alt="Logo" />
          </Col>
          <Col md={4} className='d-flex align-items-end justify-content-end'>
            <p>Data provided by Marvel &copy; {new Date().getFullYear()} MARVEL</p>
          </Col>
          <Col md={5} className="d-flex mt-3 justify-content-end">
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
