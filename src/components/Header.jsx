import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from '../assets/marvelLogo.png';

const Header = ({setSearch}) => {

  const navigate = useNavigate();

  const changeUrl = (e) =>{
    e.target.value!==""
      ? setSearch("&titleStartsWith=" + e.target.value)
      : setSearch("&offset=500")
  }

  const openFavs = () => {
    navigate('/favs');
  }

  const goToHome = () => {
    navigate('/')
    setSearch('&offset=500')
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} width={100} height={50} onClick={goToHome}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav>
              <Nav.Link href="#home" onClick={goToHome}>Home</Nav.Link>              
              <NavDropdown title="Comics" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => { goToHome(); setSearch("&dateDescriptor=thisMonth");}}>Last Updates</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => { goToHome(); setSearch("&formatType=collection")}}>Collections</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => { goToHome(); setSearch("&dateDescriptor=nextWeek")}}>Next sales</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          <Nav className='ms-auto'>
            <Container className='d-flex flex-row-reverse'>
            <Button variant="danger" onClick={openFavs}><i className="bi bi-heart-fill"></i></Button>
              <Form className='d-flex'>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 custom-search-input"
                  aria-label="Search"
                  onKeyUp={changeUrl}
                />
              </Form>
            </Container> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Header;