import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from '../assets/marvelLogo.png';


const Header = ({search, setSearch, setSelectedNavItem}) => {


  const changeUrl = (e) =>{
    setSearch("&titleStartsWith="+e.target.value)
    console.log(search)
  }


  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} width={100} height={50}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>              
                <NavDropdown title="Comics" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#" onClick={() => setSelectedNavItem('&dateDescriptor=thisMonth')}>Last Updates</NavDropdown.Item>
                  <NavDropdown.Item href="#">DC</NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={() => setSelectedNavItem('&title=Spider-Man')}>Spider-Man</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
                <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
  
                      onKeyUp={changeUrl}
                    />
                    <Button variant="outline-secondary" type='submit'><i class="bi bi-search"></i></Button>
                </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

 
export default Header;