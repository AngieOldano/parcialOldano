import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from '../assets/marvelLogo.png';



const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} width={100} height={50}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>              
                <NavDropdown title="Comics" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Last Updates</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">DC</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
                <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-secondary"><i class="bi bi-search"></i></Button>
                </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

 
export default Header;