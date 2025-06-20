import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavHead() {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img
                src="/logo03_.png"
                width={100}
                height={40}
                className='d-inline-block align-top'
                alt="EMHDesarrollos"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#proyectos">Portafolio</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHead;