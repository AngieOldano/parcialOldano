import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/marvelLogo.png';



const Footer = () => {

  return (
    <footer className="bg-dark text-light ">
      <Container fluid>
        <Row>
          <Col md={3} className='p-3 text-center text-md-start'>
            <img width={200} height={100} src={logo} alt="Logo" />
          </Col>
          <Col md={4} className='d-flex align-items-end  justify-content-center'>
            <p>Data provided by Marvel &copy; {new Date().getFullYear()} MARVEL</p>
          </Col>
          <Col md={5} className="d-flex align-items-center  justify-content-center">
            <ul className="list-inline social-media">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Marvel" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-3"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/MarvelStudios" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter custom-twitter fs-3"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/marvel" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram custom-instagram fs-3"></i>
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
